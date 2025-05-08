'use client';

import { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@/hooks/use-mediaQuery/index';

;


import { toast } from '@/components/ui/use-toast';
import FeedBakSection from '../feedBack-section';
import { EditStatusDialog } from '../feedbacks-modal/edit-status-modal';
import { CalendarDatePicker } from '../feedbacks-modal/calendar-date-picker-modal';
import { DeleteFeedbackDialog } from '../feedbacks-modal/delete-feedback-modal';
import { DeleteSuccessDialog } from '../feedbacks-modal/delete-success-modal';
import { Feedback } from '@/lib/polygon-types';




const MainFeedBackContent = () => {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 768px)');

  // State
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [selectedFeedbacks, setSelectedFeedbacks] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });
  const [statusFilterOpen, setStatusFilterOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [calendarType, setCalendarType] = useState<'from' | 'to'>('from');
  const [editStatusDialogOpen, setEditStatusDialogOpen] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState<Feedback | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteSuccessDialogOpen, setDeleteSuccessDialogOpen] = useState(false);

  // Mock data
  useEffect(() => {
    const mockFeedbacks: Feedback[] = [
      {
        id: 'feedback-1',
        fullName: 'Andrew Ereksosima',
        email: 'andrewereksosima@icloud.com',
        category: 'Bug report',
        feedback:
          'Not a strong match for the role, but could be considered for future openings.',
        status: 'Pending',
        date: '12/05/2025, 10:00AM',
      },
      {
        id: 'feedback-2',
        fullName: 'Andrew Ereksosima',
        email: 'andrewereksosima@icloud.com',
        category: 'Feature request',
        feedback:
          'The application process was a bit lengthy and could be more streamlined.',
        status: 'Resolved',
        date: '12/05/2025, 10:00AM',
      },
      {
        id: 'feedback-3',
        fullName: 'Andrew Ereksosima',
        email: 'andrewereksosima@icloud.com',
        category: 'Others',
        feedback:
          'Not a strong match for the role, but could be considered for future openings.',
        status: 'Pending',
        date: '12/05/2025, 10:00AM',
      },
      {
        id: 'feedback-4',
        fullName: 'Andrew Ereksosima',
        email: 'andrewereksosima@icloud.com',
        category: 'Subscription and Membership',
        feedback:
          'Not a strong match for the role, but could be considered for future openings.',
        status: 'Resolved',
        date: '12/05/2025, 10:00AM',
      },
      {
        id: 'feedback-5',
        fullName: 'Andrew Ereksosima',
        email: 'andrewereksosima@icloud.com',
        category: 'Bug report',
        feedback:
          'Not a strong match for the role, but could be considered for future openings.',
        status: 'Pending',
        date: '12/05/2025, 10:00AM',
      },
      {
        id: 'feedback-6',
        fullName: 'Andrew Ereksosima',
        email: 'andrewereksosima@icloud.com',
        category: 'Feature request',
        feedback:
          'Not a strong match for the role, but could be considered for future openings.',
        status: 'Resolved',
        date: '12/05/2025, 10:00AM',
      },
      {
        id: 'feedback-7',
        fullName: 'Andrew Ereksosima',
        email: 'andrewereksosima@icloud.com',
        category: 'User experience feedback',
        feedback:
          'Not a strong match for the role, but could be considered for future openings.',
        status: 'Pending',
        date: '12/05/2025, 10:00AM',
      },
      {
        id: 'feedback-8',
        fullName: 'Andrew Ereksosima',
        email: 'andrewereksosima@icloud.com',
        category: 'Others',
        feedback:
          'Not a strong match for the role, but could be considered for future openings.',
        status: 'Resolved',
        date: '12/05/2025, 10:00AM',
      },
      {
        id: 'feedback-9',
        fullName: 'Andrew Ereksosima',
        email: 'andrewereksosima@icloud.com',
        category: 'Subscription and Membership',
        feedback:
          'Not a strong match for the role, but could be considered for future openings.',
        status: 'Pending',
        date: '12/05/2025, 10:00AM',
      },
      {
        id: 'feedback-10',
        fullName: 'Andrew Ereksosima',
        email: 'andrewereksosima@icloud.com',
        category: 'Subscription and Membership',
        feedback:
          'Not a strong match for the role, but could be considered for future openings.',
        status: 'Resolved',
        date: '12/05/2025, 10:00AM',
      },
    ];

    setFeedbacks(mockFeedbacks);
    setTotalPages(Math.ceil(mockFeedbacks.length / itemsPerPage));
  }, [itemsPerPage]);

  // Filtered feedbacks
  const filteredFeedbacks = feedbacks.filter((feedback) => {
    const matchesSearch =
      feedback.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.feedback.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      !statusFilter ||
      statusFilter === 'All' ||
      feedback.status === statusFilter;

    const feedbackDate = new Date(feedback.date.split(',')[0]);
    const matchesDateRange =
      (!dateRange.from || feedbackDate >= dateRange.from) &&
      (!dateRange.to || feedbackDate <= dateRange.to);

    return matchesSearch && matchesStatus && matchesDateRange;
  });

  // Paginated feedbacks
  const paginatedFeedbacks = filteredFeedbacks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleSelectAll = () => {
    if (selectedFeedbacks.length === paginatedFeedbacks.length) {
      setSelectedFeedbacks([]);
    } else {
      setSelectedFeedbacks(paginatedFeedbacks.map((f) => f.id));
    }
  };

  const handleSelectFeedback = (id: string) => {
    if (selectedFeedbacks.includes(id)) {
      setSelectedFeedbacks(selectedFeedbacks.filter((fId) => fId !== id));
    } else {
      setSelectedFeedbacks([...selectedFeedbacks, id]);
    }
  };

  const handleDelete = () => {
    setFeedbacks(feedbacks.filter((f) => !selectedFeedbacks.includes(f.id)));
    setSelectedFeedbacks([]);
    setDeleteDialogOpen(false);
    setDeleteSuccessDialogOpen(true);
  };

  const handleExport = (format: 'PDF' | 'EXCEL' | 'CSV') => {
    // In a real app, this would trigger an API call to generate the export
    toast({
      title: 'Export started',
      description: `Your feedback data is being exported in ${format} format.`,
    });
  };

  const handleSendEmail = () => {
    // In a real app, this would open an email composition dialog
    toast({
      title: 'Email preparation',
      description: `Preparing to send email to ${selectedFeedbacks.length} recipient(s).`,
    });
  };

  const handleApplyFilter = () => {
    setCurrentPage(1);
  };

  const handleClearFilter = () => {
    setSearchQuery('');
    setStatusFilter(null);
    setDateRange({ from: undefined, to: undefined });
    setCurrentPage(1);
  };

  const handleViewDetails = (id: string) => {
    router.push(`/feedback-management/${id}`);
  };

  const handleEditStatus = (feedback: Feedback) => {
    setCurrentFeedback(feedback);
    setEditStatusDialogOpen(true);
  };

  const handleSaveStatus = (id: string, status: 'Pending' | 'Resolved') => {
    setFeedbacks(feedbacks.map((f) => (f.id === id ? { ...f, status } : f)));
  };

  const handleOpenCalendar = (type: 'from' | 'to') => {
    setCalendarType(type);
    setCalendarOpen(true);
  };

  const handleSelectDate = (date: Date) => {
    if (calendarType === 'from') {
      setDateRange({ ...dateRange, from: date });
    } else {
      setDateRange({ ...dateRange, to: date });
    }
  };

  const formatDate = (date?: Date) => {
    if (!date) return 'Select date';
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };
    return (
      <div>
        <FeedBakSection
          selectedFeedbacks={selectedFeedbacks}
          setDeleteDialogOpen={setDeleteDialogOpen}
          handleSendEmail={handleSendEmail}
          handleExport={handleExport}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          statusFilterOpen={statusFilterOpen}
          setStatusFilterOpen={setStatusFilterOpen}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          handleOpenCalendar={handleOpenCalendar}
          formatDate={formatDate}
          isMobile={isMobile}
          handleApplyFilter={handleApplyFilter}
          handleClearFilter={handleClearFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          paginatedFeedbacks={paginatedFeedbacks}
          handleSelectAll={handleSelectAll}
          handleSelectFeedback={handleSelectFeedback}
          handleEditStatus={handleEditStatus}
          setCurrentFeedback={setCurrentFeedback}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={totalPages}
          dateRange={dateRange}
        />

        <EditStatusDialog
          open={editStatusDialogOpen}
          onOpenChange={setEditStatusDialogOpen}
          feedback={currentFeedback}
          onSave={handleSaveStatus}
        />

        {/* Calendar Date Picker */}
        <CalendarDatePicker
          open={calendarOpen}
          onOpenChange={setCalendarOpen}
          onSelectDate={handleSelectDate}
        />

        {/* Delete Confirmation Dialog */}
        <DeleteFeedbackDialog
          open={deleteDialogOpen}
          onOpenChange={setDeleteDialogOpen}
          count={selectedFeedbacks.length || 1}
          onConfirm={handleDelete}
        />

        {/* Delete Success Dialog */}
        <DeleteSuccessDialog
          open={deleteSuccessDialogOpen}
          onOpenChange={setDeleteSuccessDialogOpen}
        />
      </div>
    );
};

export default MainFeedBackContent;
