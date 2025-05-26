'use client';

import React, { useState, useMemo } from 'react';
import { parse } from 'date-fns';

import { TransactionHistoryHeader } from './TransactionHistoryHeader';
import { TransactionFilters } from './TransactionFilters';
import { TransactionTable } from './TransactionTable';
import { Pagination } from './Pagination';
import {
  mockTransactions,
  getMockTransactions,
} from '../../../data/mockTransactions';

export function TransactionsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    status: '',
    fromDate: '',
    toDate: '',
    itemsPerPage: 5,
    searchQuery: '',
  });

  const filteredTransactions = useMemo(() => {
    let filtered = getMockTransactions();
    return filtered.filter((transaction) => {
      // Filter by status
      if (filters.status && transaction.status !== filters.status) {
        return false;
      }

      // Filter by search query
      if (filters.searchQuery) {
        const searchLower = filters.searchQuery.toLowerCase();
        if (
          !(
            transaction.candidate.toLowerCase().includes(searchLower) ||
            transaction.plan.toLowerCase().includes(searchLower) ||
            transaction.date.toLowerCase().includes(searchLower)
          )
        ) {
          return false;
        }
      }

      // Date filtering
      if (filters.fromDate) {
        const txDate = parse(
          transaction.date,
          'MMM d, yyyy; hh:mm a',
          new Date()
        );
        const from = new Date(filters.fromDate);
        if (txDate < from) return false;
      }
      if (filters.toDate) {
        const txDate = parse(
          transaction.date,
          'MMM d, yyyy; hh:mm a',
          new Date()
        );
        const to = new Date(filters.toDate);
        if (txDate > to) return false;
      }

      return true;
    });
  }, [filters]);

  const paginatedTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * filters.itemsPerPage;
    const endIndex = startIndex + filters.itemsPerPage;
    return filteredTransactions.slice(startIndex, endIndex);
  }, [filteredTransactions, currentPage, filters.itemsPerPage]);

  const totalPages = Math.ceil(
    filteredTransactions.length / filters.itemsPerPage
  );

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container px-4 py-8 w-[1135px]">
      <TransactionHistoryHeader />
      <TransactionFilters onFilterChange={handleFilterChange} />
      <TransactionTable transactions={paginatedTransactions} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
