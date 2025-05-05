'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowUp, Delete, Search } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui2/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui2/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui2/table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui2/pagination';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui2/dropdown-menu';
import { DateRangePicker } from '@/components/DateRangePicker';
import {
  getMentorshipRequests,
  MentorshipRequest,
} from '@/services/mentorshipService';
import { DateRange } from 'react-day-picker';
import { useRouter } from 'next/navigation';
import DeleteConfirmationDialog from '@/components/modals/DeleteConfirmationDialog';
import SuccessModal from '@/components/modals/SuccessModal';

const MentorshipRequests: React.FC = () => {
  const [requests, setRequests] = useState<MentorshipRequest[]>(
    getMentorshipRequests()
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [showCount, setShowCount] = useState<string>('10');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  // Handle Delete Modal
  const handleDelete = () => {
    const remaining = requests.filter((req) => !selectedRows.includes(req.id));
    setRequests(remaining);
    setSelectedRows([]);
    setOpenDeleteDialog(false);
    setTimeout(() => setSuccessModalOpen(true), 300); // brief delay for smooth UX
  };

  // Handle filter application
  const handleApplyFilters = () => {
    let filtered = getMentorshipRequests();

    // Apply status filter if selected
    if (selectedStatus && selectedStatus !== 'all') {
      filtered = filtered.filter(
        (req) => req.status.toLowerCase() === selectedStatus.toLowerCase()
      );
    }

    // Apply date range filter
    if (dateRange?.from) {
      filtered = filtered.filter((req) => {
        const requestDate = new Date(req.signupDate);
        return requestDate >= dateRange.from!;
      });
    }

    if (dateRange?.to) {
      filtered = filtered.filter((req) => {
        const requestDate = new Date(req.signupDate);
        return requestDate <= dateRange.to!;
      });
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (req) =>
          req.fullName.toLowerCase().includes(query) ||
          req.email.toLowerCase().includes(query)
      );
    }

    setRequests(filtered);
    setCurrentPage(1);
  };

  // Handle clear filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedStatus('all');
    setDateRange(undefined);
    setRequests(getMentorshipRequests());
  };

  // Handle checkbox selection
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = requests.map((req) => req.id);
      setSelectedRows(allIds);
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedRows((prev) => [...prev, id]);
    } else {
      setSelectedRows((prev) => prev.filter((rowId) => rowId !== id));
    }
  };

  // Pagination logic
  const itemsPerPage = parseInt(showCount);
  const totalPages = Math.ceil(requests.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRequests = requests.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="container mx-auto p-4 bg-[#f8f8f8]">
      <Card className="shadow-sm  bg-[#f8f8f8] text-black font-gabarito border-none gap-4">
        <CardHeader className="w-[1135px] gap-[30px]">
          <div className="flex flex-row items-center justify-between bg-[#f8f8f8]">
            <h1 className="font-medium text-xl leading-[26px] tracking-normal">
              Mentorship Requests
            </h1>
            <div className="flex gap-2">
              {selectedRows.length > 0 && (
                <Button
                  variant="outline"
                  className="w-[138px] h-[40px] gap-[10px] rounded-[12px] px-[30px] py-[5px] bg-white border border-[#E32908] hover:bg-grey-300"
                  onClick={() => {
                    setOpenDeleteDialog(true);
                  }}
                >
                  <Image
                    src="/icons/trash.png" // Make sure this icon exists or update the path
                    alt="Delete"
                    width={24}
                    height={24}
                  />
                  <span className="text-[#E32908] text-base font-normal">
                    Delete
                  </span>
                </Button>
              )}
              <DeleteConfirmationDialog
                open={openDeleteDialog}
                onClose={() => setOpenDeleteDialog(false)}
                onConfirm={handleDelete}
                itemCount={selectedRows.length}
                itemLabel="mentorship requests"
              />

              <SuccessModal
                open={successModalOpen}
                onClose={() => setSuccessModalOpen(false)}
              />

              <Button
                variant="outline"
                className=" w-[138px] h-[40px] gap-[10px] rounded-[12px] pt-[10px]  pb-[10px]  bg-[#0967D2] border-none"
              >
                <Image
                  src="/icons/export.png"
                  alt="Export"
                  width={24}
                  height={24}
                />
                <span className="font-normal text-base leading-5 tracking-normal text-center text-white">
                  Export
                </span>
              </Button>
            </div>
          </div>

          {/* Filter section */}
          <div className="flex justify-between items-center justify-center text-white ">
            <div className="flex gap-[12px]">
              <div className="flex gap-[12px] items-center justify-center">
                <p className=" text-sm font-medium text-black mx-auto text-[#07A2A8]">
                  Filter By
                </p>
                <div className="w-[86px] h-[36px] gap-[10px] rounded-[8px] border-[0.5px] pt-[10px] pr-[12px] pb-[10px] pl-[12px] bg-white flex text-[#414A53] border-none">
                  <span className="font-normal text-xs leading-4 tracking-normal">
                    Show
                  </span>
                  <Select value={showCount} onValueChange={setShowCount}>
                    <SelectTrigger className="bg-[#EFF0F2] w-[23px] h-[16px] gap-[10px] rounded-[4px] border-none font-normal text-xs leading-4 tracking-normal text-[#414A53] overflow-visible">
                      <SelectValue placeholder="10" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-[#90989F] border border-[#EFF0F2] shadow-[0px_5px_15px_0px_#1B20201A]">
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select
                    value={selectedStatus}
                    onValueChange={setSelectedStatus}
                  >
                    <SelectTrigger className="w-full bg-white text-[#414A53] h-[36px] w-[77px] overflow-hidden border-none gap-[10px]">
                      <Image
                        src="/icons/filter.png"
                        alt="filter"
                        width={16}
                        height={16}
                      />
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className="w-[121px] h-[166px] rounded-[10px] border border-[#EFF0F2] p-2 bg-white shadow-[0px_5px_15px_0px_#1B20201A] text-[#90989F]">
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="accepted">Accepted</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <DateRangePicker date={dateRange} onDateChange={setDateRange} />
              </div>

              <div className="flex space-x-2">
                <Button
                  onClick={handleApplyFilters}
                  className="focus:bg-[#07A2A8] focus:text-white bg-white text-[#B0B5BB] h-[36px]"
                >
                  Apply Filter
                </Button>
                <Button
                  className="focus:bg-[#07A2A8] bg-white text-[#B0B5BB] h-[36px]"
                  onClick={handleClearFilters}
                >
                  Clear
                </Button>
              </div>
            </div>

            <div className="justify-self-end bg-white rounded-[12px] h-[36px] ">
              <div className="relative ">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground bg-white" />
                <Input
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-white border-[0.5px] border-[#EFF0F2] focus:border-none text-[#414A53] "
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className=" ">
          {/* Table section */}
          <div className=" rounded-md border-none max-w-[1135px] h-[753px] gap-8 bg-white mt">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={
                        selectedRows.length > 0 &&
                        selectedRows.length === requests.length
                      }
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead>FULL NAME</TableHead>
                  <TableHead>EMAIL ADDRESS</TableHead>
                  <TableHead>MENTORS</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead>MENTORSHIP TYPE</TableHead>
                  <TableHead>SIGN-UP DATE</TableHead>
                  <TableHead className="w-12">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>
                      <Checkbox
                        className="p-[2px] "
                        checked={selectedRows.includes(request.id)}
                        onCheckedChange={(checked) =>
                          handleSelectRow(request.id, !!checked)
                        }
                      />
                    </TableCell>
                    <TableCell>{request.fullName}</TableCell>
                    <TableCell>{request.email}</TableCell>
                    <TableCell>{request.mentors}</TableCell>
                    <TableCell>
                      <div
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                        ${
                          request.status === 'Pending'
                            ? 'bg-[#FFDEE2] text-pink-800'
                            : request.status === 'Accepted'
                              ? 'bg-[#D3E4FD] text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {request.status}
                      </div>
                    </TableCell>
                    <TableCell>{request.mentorshipType}</TableCell>
                    <TableCell>
                      {new Date(request.signupDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="h-8 w-8 p-0 bg-white hover:bg-primary">
                            <span className="sr-only">Open menu</span>
                            <div className="flex flex-col gap-1 ">
                              <div className="h-1 w-1 rounded-full bg-black "></div>
                              <div className="h-1 w-1 rounded-full bg-black"></div>
                              <div className="h-1 w-1 rounded-full bg-black"></div>
                            </div>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className="flex flex-col justify-center w-[204px] h-[166px] rounded-[18px] bg-white border-[0.5px] border-[#EFF0F2] p-[8px] shadow-[0px_5px_15px_0px_rgba(27,32,32,0.1)] text-[#90989F] text-[16px] items-center justify-center text-[12px]"
                        >
                          <DropdownMenuItem>Accept request</DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              router.push(`/mentor/${request.mentorId}`)
                            }
                          >
                            View mentor's profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>Reschedule</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="mt-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    className={
                      currentPage === 1 ? 'pointer-events-none opacity-50' : ''
                    }
                  />
                </PaginationItem>

                {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                  const pageNum = i + 1;
                  return (
                    <PaginationItem key={pageNum}>
                      <PaginationLink
                        isActive={pageNum === currentPage}
                        onClick={() => setCurrentPage(pageNum)}
                        className=" rounded-[8px] w-[32px] h-[32px] "
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                {totalPages > 5 && <PaginationEllipsis />}

                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    className={
                      currentPage === totalPages
                        ? 'pointer-events-none opacity-50'
                        : ''
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MentorshipRequests;
