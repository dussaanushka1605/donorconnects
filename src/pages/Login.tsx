
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Droplets, Heart, Hospital } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
        <FadeIn className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex justify-center mb-6">
                <div className="bg-raktsetu-50 p-3 rounded-full">
                  <Droplets className="h-8 w-8 text-raktsetu-600" />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Login to RaktSetu
              </h1>
              
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
                    <div className="space-y-2">
                      <Label htmlFor="donor-email">Email</Label>
                      <Input id="donor-email" placeholder="Enter your email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="donor-password">Password</Label>
                        <Link to="#" className="text-sm text-raktsetu-600 hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input id="donor-password" placeholder="Enter your password" type="password" required />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-raktsetu-600 hover:bg-raktsetu-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="hospital">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="hospital-email">Hospital Email</Label>
                      <Input id="hospital-email" placeholder="Enter hospital email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="hospital-password">Password</Label>
                        <Link to="#" className="text-sm text-raktsetu-600 hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input id="hospital-password" placeholder="Enter your password" type="password" required />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-raktsetu-600 hover:bg-raktsetu-700"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
              
              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-raktsetu-600 hover:underline font-medium">
                    Register now
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

export default Login;
