'use client';

import { useState, useEffect } from 'react';
import { MoreVertical, Plus, Search, Mail, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@/hooks/use-mediaQuery/index';

// import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { toast } from '@/components/ui/use-toast';
import { CreateMentorDialog } from '@/components/polygon-mentors-management/mentorsdialog/create-mentor-modal/index';
import { DeleteMentorDialog } from '@/components/polygon-mentors-management/mentorsdialog/delete-mentor-modal/index';
import { DeleteSuccessDialog } from '@/components/polygon-mentors-management/mentorsdialog/delete-success-modal/index';
import { MentorCard } from '@/components/polygon-mentors-management/mentorsdialog/mentor-card/index';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AddMentorModal } from './modals/AddMentorDialog';
// import { CreateMentorDialog } from '../mentorsdialog/create-mentor-modal';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { AddAvailabilityModal } from '../mentorsdialog/calender-dialog';

export default function MentorsManagement() {
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 768px)');

  // State for dialogs
  const [createMentorOpen, setCreateMentorOpen] = useState(false);
  const [deleteMentorOpen, setDeleteMentorOpen] = useState(false);
  const [deleteSuccessOpen, setDeleteSuccessOpen] = useState(false);
  const [mentorToDelete, setMentorToDelete] = useState<any>(null);

  // State for filters and search
  const [searchQuery, setSearchQuery] = useState('');
  const [genderFilter, setGenderFilter] = useState<string | null>(null);
  const [countryFilter, setCountryFilter] = useState<string | null>(null);
  const [expertiseFilter, setExpertiseFilter] = useState<string | null>(null);
  const [showGenderFilter, setShowGenderFilter] = useState(false);
  const [showCountryFilter, setShowCountryFilter] = useState(false);
  const [showExpertiseFilter, setShowExpertiseFilter] = useState(false);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedMentors, setSelectedMentors] = useState<string[]>([]);

  // Mock data for mentors
  const [mentors, setMentors] = useState<any[]>([
    {
      id: '1',
      fullName: 'Andrew Ereksosima',
      email: 'andrewereksosima@icloud.com',
      gender: 'Male',
      country: 'Nigeria',
      expertise: ['Product', 'Design', 'Marketing', 'Development'],
    },
    {
      id: '2',
      fullName: 'Andrew Ereksosima',
      email: 'andrewereksosima@icloud.com',
      gender: 'Female',
      country: 'Canada',
      expertise: ['Product', 'Design', 'Marketing'],
    },
    {
      id: '3',
      fullName: 'Andrew Ereksosima',
      email: 'andrewereksosima@icloud.com',
      gender: 'Male',
      country: 'South Africa',
      expertise: ['Product', 'Design', 'Development'],
    },
    {
      id: '4',
      fullName: 'Andrew Ereksosima',
      email: 'andrewereksosima@icloud.com',
      gender: 'Female',
      country: 'Nigeria',
      expertise: ['Product', 'Design', 'Marketing'],
    },
    {
      id: '5',
      fullName: 'Andrew Ereksosima',
      email: 'andrewereksosima@icloud.com',
      gender: 'Male',
      country: 'Nigeria',
      expertise: ['Product', 'Design', 'Development'],
    },
    {
      id: '6',
      fullName: 'Andrew Ereksosima',
      email: 'andrewereksosima@icloud.com',
      gender: 'Female',
      country: 'South Africa',
      expertise: ['Product', 'Design'],
    },
    {
      id: '7',
      fullName: 'Andrew Ereksosima',
      email: 'andrewereksosima@icloud.com',
      gender: 'Male',
      country: 'South Africa',
      expertise: ['Product', 'Design', 'Marketing'],
    },
    {
      id: '8',
      fullName: 'Andrew Ereksosima',
      email: 'andrewereksosima@icloud.com',
      gender: 'Female',
      country: 'Nigeria',
      expertise: ['Product', 'Design', 'Development'],
    },
    {
      id: '9',
      fullName: 'Andrew Ereksosima',
      email: 'andrewereksosima@icloud.com',
      gender: 'Female',
      country: 'Canada',
      expertise: ['Product', 'Design', 'Marketing'],
    },
  ]);

  // Filter mentors based on search query and filters
  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some((exp: string) =>
        exp.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesGender = !genderFilter || mentor.gender === genderFilter;
    const matchesCountry = !countryFilter || mentor.country === countryFilter;
    const matchesExpertise =
      !expertiseFilter || mentor.expertise.includes(expertiseFilter);

    return matchesSearch && matchesGender && matchesCountry && matchesExpertise;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMentors = filteredMentors.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredMentors.length / itemsPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, genderFilter, countryFilter, expertiseFilter]);

  // Handle select all mentors
  const handleSelectAll = () => {
    if (selectedMentors.length === currentMentors.length) {
      setSelectedMentors([]);
    } else {
      setSelectedMentors(currentMentors.map((mentor) => mentor.id));
    }
  };

  // Handle select mentor
  const handleSelectMentor = (id: string) => {
    if (selectedMentors.includes(id)) {
      setSelectedMentors(selectedMentors.filter((mentorId) => mentorId !== id));
    } else {
      setSelectedMentors([...selectedMentors, id]);
    }
  };

  // Handle delete mentor
  const handleDeleteMentor = () => {
    if (mentorToDelete) {
      // Remove the mentor from the list
      const updatedMentors = mentors.filter(
        (mentor) => mentor.id !== mentorToDelete.id
      );

      // Check if the current page would be empty after deletion
      const currentPageItemCount = filteredMentors.filter(
        (mentor) =>
          mentor.id !== mentorToDelete.id &&
          filteredMentors.indexOf(mentor) >= indexOfFirstItem &&
          filteredMentors.indexOf(mentor) < indexOfLastItem
      ).length;

      // If this was the last item on the page and not the first page, go to previous page
      if (currentPageItemCount === 0 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }

      setMentors(updatedMentors);
      setDeleteMentorOpen(false);
      setDeleteSuccessOpen(true);

      // Reset the mentor to delete
      setMentorToDelete(null);
    }
  };

  // Handle delete selected mentors
  const handleDeleteSelected = () => {
    if (selectedMentors.length > 0) {
      // Remove the selected mentors from the list
      const updatedMentors = mentors.filter(
        (mentor) => !selectedMentors.includes(mentor.id)
      );

      // Check if the current page would be empty after deletion
      const currentPageItemCount = filteredMentors.filter(
        (mentor) =>
          !selectedMentors.includes(mentor.id) &&
          filteredMentors.indexOf(mentor) >= indexOfFirstItem &&
          filteredMentors.indexOf(mentor) < indexOfLastItem
      ).length;

      // If this was the last item on the page and not the first page, go to previous page
      if (currentPageItemCount === 0 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }

      setMentors(updatedMentors);
      setSelectedMentors([]);
      setDeleteSuccessOpen(true);
    }
  };

  // Handle create mentor
  const handleCreateMentor = (data: {
    firstName: string;
    lastName: string;
    email?: string; // Assuming email is still part of the data, maybe from a step not yet defined
    gender: string;
    country: string;
    language: string;
    company: string;
    title: string;
    yearsExp: string;
    monthsExp: string;
    linkedinUrl: string;
    primaryExpertise: string;
    secondaryExpertise: string[];
    disciplines: string[];
    skills: string[];
    tools: string[];
    introduction: string;
    infoConfirmed: boolean;
    enableNotifications: boolean;
    // Add any other fields from FormData that should be used here
  }) => {
    // In a real app, you would send this data to your API
    console.log('Creating mentor with data:', data);

    // For demo purposes, add the new mentor to the list
    const newMentor = {
      id: (mentors.length + 1).toString(), // Simple ID generation
      fullName: `${data.firstName} ${data.lastName}`,
      email: data.email || '', // Use email if available
      gender: data.gender,
      country: data.country,
      expertise: [data.primaryExpertise, ...data.secondaryExpertise].filter(
        Boolean
      ), // Combine primary and secondary expertise
      // Add other relevant fields from the onboarding data if needed in the mentor list structure
    };

    setMentors([...mentors, newMentor]);
    setCreateMentorOpen(false);

    toast({
      title: 'Mentor created',
      description: `${data.firstName} ${data.lastName} has been added as a mentor`,
    });
  };

  // Handle apply filter
  const handleApplyFilter = () => {
    toast({
      title: 'Filters applied',
      description: 'The mentors list has been filtered based on your criteria',
    });
  };

  // Handle clear filter
  const handleClearFilter = () => {
    setGenderFilter(null);
    setCountryFilter(null);
    setExpertiseFilter(null);
    setSearchQuery('');

    toast({
      title: 'Filters cleared',
      description: 'All filters have been reset',
    });
  };

  // Empty state components
  const EmptySearchState = () => (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 rounded-full bg-gray-100 p-4">
        <Search className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="mb-2 text-lg font-medium">No results found</h3>
      <p className="mb-6 max-w-md text-sm text-gray-500">
        No mentors matching "<span className="font-medium">{searchQuery}</span>"
        were found. Try adjusting your search or filter criteria.
      </p>
      <Button onClick={() => setCreateMentorOpen(true)}>
        <Plus className="mr-2 h-4 w-4" /> Add a mentor
      </Button>
    </div>
  );

  const NoMentorsState = () => (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 rounded-full bg-blue-50 p-4">
        <Search className="h-8 w-8 text-blue-500" />
      </div>
      <h3 className="mb-2 text-lg font-medium">No mentors yet</h3>
      <p className="mb-6 max-w-md text-sm text-gray-500">
        You haven't added any mentors yet. Mentors can help guide candidates
        through their career journey.
      </p>
      <Button onClick={() => setCreateMentorOpen(true)}>
        <Plus className="mr-2 h-4 w-4" /> Add a mentor
      </Button>
    </div>
  );

  return (
    <>
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-2xl font-bold">Mentors Management</h1>
        <div className="flex gap-2">
          <Button
            className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
            onClick={() => setCreateMentorOpen(true)}
          >
            <Plus className="h-4 w-4" />
            Add a mentor
          </Button>

          {selectedMentors.length > 0 && (
            <>
              <Button
                variant="outline"
                className="flex items-center gap-2 border-red-200 text-red-600 hover:bg-red-50"
                onClick={() => {
                  setMentorToDelete({ id: selectedMentors[0] });
                  setDeleteMentorOpen(true);
                }}
              >
                <Trash2 className="h-4 w-4" />
                <span className="hidden sm:inline">Delete</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Send email</span>
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Filter by</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm">Show</span>
            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) => setItemsPerPage(Number.parseInt(value))}
            >
              <SelectTrigger className="w-19 bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Popover open={showGenderFilter} onOpenChange={setShowGenderFilter}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-white"
              >
                <span>Gender</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48" align="start">
              <div className="flex flex-col space-y-2">
                <Button
                  variant={!genderFilter ? 'default' : 'ghost'}
                  className="justify-start"
                  onClick={() => {
                    setGenderFilter(null);
                    setShowGenderFilter(false);
                  }}
                >
                  All
                </Button>
                <Button
                  variant={genderFilter === 'Male' ? 'default' : 'ghost'}
                  className="justify-start"
                  onClick={() => {
                    setGenderFilter('Male');
                    setShowGenderFilter(false);
                  }}
                >
                  Male
                </Button>
                <Button
                  variant={genderFilter === 'Female' ? 'default' : 'ghost'}
                  className="justify-start"
                  onClick={() => {
                    setGenderFilter('Female');
                    setShowGenderFilter(false);
                  }}
                >
                  Female
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Popover open={showCountryFilter} onOpenChange={setShowCountryFilter}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-white"
              >
                <span>Country</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48" align="start">
              <div className="flex flex-col space-y-2">
                <Button
                  variant={!countryFilter ? 'default' : 'ghost'}
                  className="justify-start"
                  onClick={() => {
                    setCountryFilter(null);
                    setShowCountryFilter(false);
                  }}
                >
                  All
                </Button>
                <Button
                  variant={countryFilter === 'Nigeria' ? 'default' : 'ghost'}
                  className="justify-start"
                  onClick={() => {
                    setCountryFilter('Nigeria');
                    setShowCountryFilter(false);
                  }}
                >
                  Nigeria
                </Button>
                <Button
                  variant={countryFilter === 'Canada' ? 'default' : 'ghost'}
                  className="justify-start"
                  onClick={() => {
                    setCountryFilter('Canada');
                    setShowCountryFilter(false);
                  }}
                >
                  Canada
                </Button>
                <Button
                  variant={
                    countryFilter === 'South Africa' ? 'default' : 'ghost'
                  }
                  className="justify-start"
                  onClick={() => {
                    setCountryFilter('South Africa');
                    setShowCountryFilter(false);
                  }}
                >
                  South Africa
                </Button>
                <Button
                  variant={countryFilter === 'America' ? 'default' : 'ghost'}
                  className="justify-start"
                  onClick={() => {
                    setCountryFilter('America');
                    setShowCountryFilter(false);
                  }}
                >
                  America
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Popover
            open={showExpertiseFilter}
            onOpenChange={setShowExpertiseFilter}
          >
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-white"
              >
                <span>Expertise</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48" align="start">
              <div className="flex flex-col space-y-2">
                <Button
                  variant={!expertiseFilter ? 'default' : 'ghost'}
                  className="justify-start"
                  onClick={() => {
                    setExpertiseFilter(null);
                    setShowExpertiseFilter(false);
                  }}
                >
                  All
                </Button>
                <Button
                  variant={expertiseFilter === 'Product' ? 'default' : 'ghost'}
                  className="justify-start"
                  onClick={() => {
                    setExpertiseFilter('Product');
                    setShowExpertiseFilter(false);
                  }}
                >
                  Product
                </Button>
                <Button
                  variant={expertiseFilter === 'Design' ? 'default' : 'ghost'}
                  className="justify-start"
                  onClick={() => {
                    setExpertiseFilter('Design');
                    setShowExpertiseFilter(false);
                  }}
                >
                  Design
                </Button>
                <Button
                  variant={
                    expertiseFilter === 'Marketing' ? 'default' : 'ghost'
                  }
                  className="justify-start"
                  onClick={() => {
                    setExpertiseFilter('Marketing');
                    setShowExpertiseFilter(false);
                  }}
                >
                  Marketing
                </Button>
                <Button
                  variant={
                    expertiseFilter === 'Development' ? 'default' : 'ghost'
                  }
                  className="justify-start"
                  onClick={() => {
                    setExpertiseFilter('Development');
                    setShowExpertiseFilter(false);
                  }}
                >
                  Development
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Button
            size="sm"
            className="bg-teal-500 hover:bg-teal-600"
            onClick={handleApplyFilter}
          >
            Apply filter
          </Button>

          <Button
            className="bg-transparent text-gray-700 outline-0 shadow-none hover:bg-transparent"
            size="sm"
            onClick={handleClearFilter}
          >
            Clear filter
          </Button>
        </div>

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
          {currentMentors.length === 0 ? (
            mentors.length === 0 ? (
              <NoMentorsState />
            ) : (
              <EmptySearchState />
            )
          ) : (
            currentMentors.map((mentor) => (
              <MentorCard
                key={mentor.id}
                mentor={mentor}
                isSelected={selectedMentors.includes(mentor.id)}
                onSelect={handleSelectMentor}
                onDelete={() => {
                  setMentorToDelete(mentor);
                  setDeleteMentorOpen(true);
                }}
                onSendEmail={() => {
                  window.location.href = `mailto:${mentor.email}`;
                }}
              />
            ))
          )}
        </div>
      )}

      {/* Desktop view */}
      {!isMobile && (
        <div className="hidden md:block bg-white rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={
                      currentMentors.length > 0 &&
                      selectedMentors.length === currentMentors.length
                    }
                    onCheckedChange={handleSelectAll}
                    aria-label="Select all mentors"
                  />
                </TableHead>
                <TableHead>FULL NAME</TableHead>
                <TableHead>EMAIL ADDRESS</TableHead>
                <TableHead>GENDER</TableHead>
                <TableHead>COUNTRY</TableHead>
                <TableHead>EXPERTISE</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentMentors.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="p-0 border-b-0">
                    {mentors.length === 0 ? (
                      <NoMentorsState />
                    ) : (
                      <EmptySearchState />
                    )}
                  </TableCell>
                </TableRow>
              ) : (
                currentMentors.map((mentor) => (
                  <TableRow key={mentor.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedMentors.includes(mentor.id)}
                        onCheckedChange={() => handleSelectMentor(mentor.id)}
                        aria-label={`Select ${mentor.fullName}`}
                      />
                    </TableCell>
                    <TableCell>{mentor.fullName}</TableCell>
                    <TableCell>{mentor.email}</TableCell>
                    <TableCell>{mentor.gender}</TableCell>
                    <TableCell>{mentor.country}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {mentor.expertise
                          .slice(0, 2)
                          .map((exp: string, i: number) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="bg-gray-50"
                            >
                              {exp}
                            </Badge>
                          ))}
                        {mentor.expertise.length > 2 && (
                          <Badge variant="outline" className="bg-gray-50">
                            +{mentor.expertise.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/mentor-details/${mentor.id}`}>
                              View details
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              (window.location.href = `mailto:${mentor.email}`)
                            }
                          >
                            Send email
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => {
                              setMentorToDelete(mentor);
                              setDeleteMentorOpen(true);
                            }}
                          >
                            Delete mentor
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Pagination */}
      {filteredMentors.length > 0 && (
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-1">
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

            <Button
              variant="default"
              size="icon"
              className="h-8 w-8 bg-blue-600"
              onClick={() => setCurrentPage(1)}
            >
              1
            </Button>

            {totalPages > 1 && (
              <Button
                variant={currentPage === 2 ? 'default' : 'outline'}
                size="icon"
                className={`h-8 w-8 ${currentPage === 2 ? 'bg-blue-600' : ''}`}
                onClick={() => setCurrentPage(2)}
              >
                2
              </Button>
            )}

            {totalPages > 2 && (
              <Button
                variant={currentPage === 3 ? 'default' : 'outline'}
                size="icon"
                className={`h-8 w-8 ${currentPage === 3 ? 'bg-blue-600' : ''}`}
                onClick={() => setCurrentPage(3)}
              >
                3
              </Button>
            )}

            {totalPages > 3 && <span>...</span>}

            {totalPages > 3 && (
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
          </div>
        </div>
      )}

      {/* Dialogs */}
      <CreateMentorDialog
        open={createMentorOpen}
        onOpenChange={setCreateMentorOpen}
        onClose={() => setCreateMentorOpen(false)}
        onSubmit={handleCreateMentor}
      />

      <DeleteMentorDialog
        open={deleteMentorOpen}
        onOpenChange={setDeleteMentorOpen}
        onConfirm={handleDeleteMentor}
      />

      <DeleteSuccessDialog
        open={deleteSuccessOpen}
        onOpenChange={setDeleteSuccessOpen}
        entityType="Mentor"
      />
    </>
  );
}
