import * as React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // update this path if needed

const CounterSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center md:text-left">
            <Card className="bg-gray-50 border border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-600 text-base">Served Over</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="text-5xl font-extrabold text-grey-600 mb-2">
                  1,321,901
                </div>
                <CardDescription className="text-gray-600 mb-4">
                  Children in 150 Countries
                </CardDescription>
              </CardContent>

              <CardFooter className="justify-center md:justify-start">
                <Link
                  to="/projects"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  View Our Program
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
