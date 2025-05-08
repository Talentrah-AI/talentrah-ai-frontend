import { Button } from '@/components/ui/button';
import { Calendar, Filter, Mail, MoreVertical, Search, Trash2 } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';
import { ExportDropdown } from '../feedbacks-modal/export-dropdown';
import { FeedbackCard } from '../feedBack-card';
import { FeedbackProps } from '@/lib/polygon-types';



const FeedBakSection = ({
  selectedFeedbacks,
  setDeleteDialogOpen,
  handleSendEmail,
  handleExport,
  itemsPerPage,
  setItemsPerPage,
  statusFilterOpen,
  setStatusFilterOpen,
  statusFilter,
  setStatusFilter,
  handleOpenCalendar,
  formatDate,
  isMobile,
  handleApplyFilter,
  handleClearFilter,
  searchQuery,
  setSearchQuery,
  paginatedFeedbacks,
  handleSelectAll,
  handleSelectFeedback,
  handleEditStatus,
  setCurrentFeedback,
  setCurrentPage,
  currentPage,
  totalPages,
  dateRange,
}:FeedbackProps) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <h1 className="text-[20px] font-bold text-[#08121D]">
          Feedbacks management
        </h1>
        <div className="flex flex-wrap gap-2">
          {selectedFeedbacks.length > 0 && (
            <>
              <Button
                variant="outline"
                className="flex items-center gap-2 border-red-200 text-red-600 hover:bg-red-50"
                onClick={() => setDeleteDialogOpen(true)}
              >
                <Trash2 className="h-4 w-4" />
                <span className="hidden sm:inline">Delete</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={handleSendEmail}
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Send email</span>
              </Button>
            </>
          )}
          <ExportDropdown onExport={handleExport} />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <div className="text-teal-500 text-sm font-medium">Filter by</div>

        <div className="flex items-center gap-2">
          <span className="text-sm">Show</span>
          <select
            className="border rounded-md px-2 py-1 text-sm"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>

        <Popover open={statusFilterOpen} onOpenChange={setStatusFilterOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              <span>Status</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48" align="start">
            <div className="flex flex-col space-y-2">
              <Button
                variant={
                  statusFilter === 'All' || !statusFilter ? 'default' : 'ghost'
                }
                className="justify-start"
                onClick={() => {
                  setStatusFilter('All');
                  setStatusFilterOpen(false);
                }}
              >
                All
              </Button>
              <Button
                variant={statusFilter === 'Pending' ? 'default' : 'ghost'}
                className="justify-start"
                onClick={() => {
                  setStatusFilter('Pending');
                  setStatusFilterOpen(false);
                }}
              >
                Pending
              </Button>
              <Button
                variant={statusFilter === 'Resolved' ? 'default' : 'ghost'}
                className="justify-start"
                onClick={() => {
                  setStatusFilter('Resolved');
                  setStatusFilterOpen(false);
                }}
              >
                Resolved
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <div className="flex flex-wrap gap-2 items-center">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => handleOpenCalendar('from')}
          >
            <Calendar className="h-4 w-4" />
            <span className="text-xs sm:text-sm">
              From: {formatDate(dateRange.from)}
            </span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => handleOpenCalendar('to')}
          >
            <Calendar className="h-4 w-4" />
            <span className="text-xs sm:text-sm">
              To: {formatDate(dateRange.to)}
            </span>
          </Button>
        </div>

        <Button
          size="sm"
          className="bg-teal-500 hover:bg-teal-600 text-white"
          onClick={handleApplyFilter}
        >
          Apply filter
        </Button>

        <Button variant="ghost" size="sm" onClick={handleClearFilter}>
          Clear filter
        </Button>

        <div className="w-full md:w-auto md:ml-auto mt-2 md:mt-0">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-8 w-full md:w-64 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Mobile view */}
      {isMobile && (
        <div className="md:hidden">
          {paginatedFeedbacks.length === 0 ? (
            <div className="text-center py-8 bg-white rounded-md border">
              <p className="text-gray-500">No feedbacks found</p>
            </div>
          ) : (
            paginatedFeedbacks.map((feedback) => (
              <FeedbackCard
                key={feedback.id}
                feedback={feedback}
                isSelected={selectedFeedbacks.includes(feedback.id)}
                onSelect={handleSelectFeedback}
                onEditStatus={handleEditStatus}
                onDelete={(feedback) => {
                  setCurrentFeedback(feedback);
                  setDeleteDialogOpen(true);
                }}
              />
            ))
          )}
        </div>
      )}

      {/* Desktop view */}
      {!isMobile && (
        <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-3 text-left">
                  <Checkbox
                    checked={
                      paginatedFeedbacks.length > 0 &&
                      selectedFeedbacks.length === paginatedFeedbacks.length
                    }
                    onCheckedChange={handleSelectAll}
                    aria-label="Select all"
                  />
                </th>
                <th className="p-3 text-left font-medium text-sm text-gray-500">
                  FULL NAME
                </th>
                <th className="p-3 text-left font-medium text-sm text-gray-500">
                  EMAIL ADDRESS
                </th>
                <th className="p-3 text-left font-medium text-sm text-gray-500">
                  CATEGORIES
                </th>
                <th className="p-3 text-left font-medium text-sm text-gray-500">
                  FEEDBACK
                </th>
                <th className="p-3 text-left font-medium text-sm text-gray-500">
                  STATUS
                </th>
                <th className="p-3 text-left font-medium text-sm text-gray-500">
                  DATE
                </th>
                <th className="p-3 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {paginatedFeedbacks.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-8 text-center text-gray-500">
                    No feedbacks found
                  </td>
                </tr>
              ) : (
                paginatedFeedbacks.map((feedback) => (
                  <tr
                    key={feedback.id}
                    className=" hover:bg-gray-50 text-sm text-[#08121D] font-normal"
                  >
                    <td className="p-3">
                      <Checkbox
                        checked={selectedFeedbacks.includes(feedback.id)}
                        onCheckedChange={() =>
                          handleSelectFeedback(feedback.id)
                        }
                        aria-label={`Select feedback from ${feedback.fullName}`}
                      />
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      {feedback.fullName}
                    </td>
                    <td className="p-3 whitespace-nowrap">{feedback.email}</td>
                    <td className="p-3 whitespace-nowrap">
                      {feedback.category}
                    </td>
                    <td className="p-3 max-w-xs truncate">
                      {feedback.feedback}
                    </td>
                    <td className="p-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          feedback.status === 'Pending'
                            ? 'bg-red-50 text-red-600'
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        {feedback.status}
                      </span>
                    </td>
                    <td className="p-3 whitespace-nowrap">{feedback.date}</td>
                    <td className="p-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="p-2 shadow-lg">
                          <DropdownMenuItem
                            onClick={() => handleEditStatus(feedback)}
                          >
                            Edit status
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              setCurrentFeedback(feedback);
                              setDeleteDialogOpen(true);
                            }}
                          >
                            Delete feedback
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <nav className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <span className="sr-only">Previous page</span>
            &lt;
          </Button>

          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => (
            <Button
              key={i}
              variant={currentPage === i + 1 ? 'default' : 'outline'}
              size="icon"
              className={`h-8 w-8 ${currentPage === i + 1 ? 'bg-blue-600' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}

          {totalPages > 5 && <span>...</span>}

          {totalPages > 5 && (
            <Button
              variant={currentPage === totalPages ? 'default' : 'outline'}
              size="icon"
              className={`h-8 w-8 ${currentPage === totalPages ? 'bg-blue-600' : ''}`}
              onClick={() => setCurrentPage(totalPages)}
            >
              {totalPages}
            </Button>
          )}

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <span className="sr-only">Next page</span>
            &gt;
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default FeedBakSection