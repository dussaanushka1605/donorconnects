
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Phone, Award, MapPin, Filter } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import BlurCard from "@/components/ui/BlurCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock donor data
const donors = [
  {
    id: 1,
    name: "Raj Sharma",
    bloodType: "A+",
    lastDonation: "2 months ago",
    location: "Mumbai, Maharashtra",
    distance: "1.2 km",
    donations: 12,
    isAvailable: true,
  },
  {
    id: 2,
    name: "Priya Patel",
    bloodType: "O-",
    lastDonation: "3 months ago",
    location: "Delhi, NCR",
    distance: "2.5 km",
    donations: 8,
    isAvailable: true,
  },
  {
    id: 3,
    name: "Amit Kumar",
    bloodType: "B+",
    lastDonation: "1 month ago",
    location: "Bangalore, Karnataka",
    distance: "3.7 km",
    donations: 15,
    isAvailable: true,
  },
  {
    id: 4,
    name: "Meera Singh",
    bloodType: "AB+",
    lastDonation: "5 months ago",
    location: "Pune, Maharashtra",
    distance: "4.1 km",
    donations: 5,
    isAvailable: false,
  },
  {
    id: 5,
    name: "Vikas Reddy",
    bloodType: "O+",
    lastDonation: "2 weeks ago",
    location: "Hyderabad, Telangana",
    distance: "5.3 km",
    donations: 20,
    isAvailable: true,
  },
  {
    id: 6,
    name: "Neha Gupta",
    bloodType: "A-",
    lastDonation: "6 months ago",
    location: "Chennai, Tamil Nadu",
    distance: "6.5 km",
    donations: 3,
    isAvailable: true,
  },
];

const DonorList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBloodType, setSelectedBloodType] = useState<string | undefined>(undefined);
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const filteredDonors = donors.filter((donor) => {
    const matchesSearch = donor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          donor.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBloodType = !selectedBloodType || donor.bloodType === selectedBloodType;
    
    return matchesSearch && matchesBloodType;
  });

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <div className="text-center mb-10">
              <Badge variant="outline" className="text-raktsetu-600 bg-raktsetu-50 border-raktsetu-100 mb-4">
                Find Donors
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Blood Donors Near You
              </h1>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Find and connect with blood donors in your area. Use the search and filters to find a match for your blood type requirements.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="Search by name or location"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="w-full md:w-44">
                  <Select onValueChange={setSelectedBloodType} value={selectedBloodType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Blood Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Blood Types</SelectItem>
                      <SelectItem value="A+">A+</SelectItem>
                      <SelectItem value="A-">A-</SelectItem>
                      <SelectItem value="B+">B+</SelectItem>
                      <SelectItem value="B-">B-</SelectItem>
                      <SelectItem value="AB+">AB+</SelectItem>
                      <SelectItem value="AB-">AB-</SelectItem>
                      <SelectItem value="O+">O+</SelectItem>
                      <SelectItem value="O-">O-</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button 
                  variant="outline" 
                  className="md:w-auto"
                  onClick={toggleFilters}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </div>

              {showFilters && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100">
                  <div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Distance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">Within 5 km</SelectItem>
                        <SelectItem value="10">Within 10 km</SelectItem>
                        <SelectItem value="20">Within 20 km</SelectItem>
                        <SelectItem value="50">Within 50 km</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Last Donation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Last 1 month</SelectItem>
                        <SelectItem value="3">Last 3 months</SelectItem>
                        <SelectItem value="6">Last 6 months</SelectItem>
                        <SelectItem value="12">Last 12 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="available">Available Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>

          <div className="space-y-4">
            {filteredDonors.length > 0 ? (
              filteredDonors.map((donor, index) => (
                <FadeIn key={donor.id} delay={0.1 + index * 0.05} className="transition-all duration-300">
                  <BlurCard className="p-6" intensity="light" hoverEffect>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-14 w-14 border-2 border-raktsetu-100">
                          <AvatarFallback className="bg-raktsetu-50 text-raktsetu-700">
                            {getInitials(donor.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg text-gray-900">{donor.name}</h3>
                            {donor.donations >= 10 && (
                              <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-100">
                                <Award size={12} className="mr-1" />
                                Top Donor
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                            <MapPin size={14} />
                            <span>{donor.location}</span>
                            <span className="text-gray-400">•</span>
                            <span>{donor.distance}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-wrap gap-4 md:gap-8 md:justify-around items-center mt-4 md:mt-0">
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-raktsetu-50 text-raktsetu-700 font-bold">
                            {donor.bloodType}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Blood Type</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">{donor.donations}</div>
                          <p className="text-xs text-gray-500">Donations</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="font-semibold text-gray-900">{donor.lastDonation}</div>
                          <p className="text-xs text-gray-500">Last Donated</p>
                        </div>
                        
                        <div className="text-center">
                          <Badge className={donor.isAvailable 
                            ? "bg-green-100 text-green-700 border-green-200 hover:bg-green-100" 
                            : "bg-red-100 text-red-700 border-red-200 hover:bg-red-100"
                          }>
                            {donor.isAvailable ? "Available" : "Unavailable"}
                          </Badge>
                        </div>
                      </div>

                      <Button className="md:self-center bg-raktsetu-600 hover:bg-raktsetu-700 w-full md:w-auto mt-4 md:mt-0">
                        <Phone size={16} className="mr-2" />
                        Contact
                      </Button>
                    </div>
                  </BlurCard>
                </FadeIn>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No donors found</h3>
                <p className="text-gray-600">
                  Try adjusting your search criteria or check back later.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DonorList;
