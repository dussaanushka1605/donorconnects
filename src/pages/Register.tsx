
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Droplets, Heart, Hospital } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const bloodTypes = [
    "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
        <FadeIn className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex justify-center mb-6">
                <div className="bg-raktsetu-50 p-3 rounded-full">
                  <Droplets className="h-8 w-8 text-raktsetu-600" />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
                Join RaktSetu
              </h1>
              <p className="text-gray-600 text-center mb-8">
                Register to donate blood or request donors
              </p>
              
              <Tabs defaultValue="donor" className="mb-6">
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="donor" className="flex items-center justify-center">
                    <Heart className="mr-2 h-4 w-4" />
                    Donor
                  </TabsTrigger>
                  <TabsTrigger value="hospital" className="flex items-center justify-center">
                    <Hospital className="mr-2 h-4 w-4" />
                    Hospital
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="donor">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="donor-name">Full Name</Label>
                        <Input id="donor-name" placeholder="Enter your full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="donor-email">Email</Label>
                        <Input id="donor-email" placeholder="Enter your email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="donor-phone">Phone Number</Label>
                        <Input id="donor-phone" placeholder="Enter your phone number" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="donor-bloodtype">Blood Type</Label>
                        <Select>
                          <SelectTrigger id="donor-bloodtype">
                            <SelectValue placeholder="Select your blood type" />
                          </SelectTrigger>
                          <SelectContent>
                            {bloodTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="donor-password">Password</Label>
                        <Input id="donor-password" placeholder="Choose a password" type="password" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="donor-confirm-password">Confirm Password</Label>
                        <Input id="donor-confirm-password" placeholder="Confirm your password" type="password" required />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="donor-address">Address</Label>
                        <Input id="donor-address" placeholder="Enter your address" required />
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 mt-4">
                      <Checkbox id="donor-terms" />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="donor-terms"
                          className="text-sm text-gray-700 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the terms and conditions
                        </label>
                        <p className="text-sm text-gray-500">
                          I consent to be contacted by hospitals in need of blood donation.
                        </p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-raktsetu-600 hover:bg-raktsetu-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Registering..." : "Register as Donor"}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="hospital">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="hospital-name">Hospital Name</Label>
                        <Input id="hospital-name" placeholder="Enter hospital name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hospital-email">Email</Label>
                        <Input id="hospital-email" placeholder="Enter official email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hospital-phone">Phone Number</Label>
                        <Input id="hospital-phone" placeholder="Enter hospital phone number" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hospital-registration">Registration Number</Label>
                        <Input id="hospital-registration" placeholder="Enter registration number" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hospital-password">Password</Label>
                        <Input id="hospital-password" placeholder="Choose a password" type="password" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hospital-confirm-password">Confirm Password</Label>
                        <Input id="hospital-confirm-password" placeholder="Confirm your password" type="password" required />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="hospital-address">Address</Label>
                        <Input id="hospital-address" placeholder="Enter hospital address" required />
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 mt-4">
                      <Checkbox id="hospital-terms" />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="hospital-terms"
                          className="text-sm text-gray-700 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the terms and conditions
                        </label>
                        <p className="text-sm text-gray-500">
                          I confirm that this is a registered medical facility.
                        </p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-raktsetu-600 hover:bg-raktsetu-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Registering..." : "Register Hospital"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
              
              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-raktsetu-600 hover:underline font-medium">
                    Login now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
