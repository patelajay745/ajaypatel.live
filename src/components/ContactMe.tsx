import React, { FC } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, Send, AlertCircle } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export const ContactMeSection: FC = () => {
  const [error, setError] = React.useState("");

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    try {
    } catch (error) {
      setError((error as Error).message);
    }
    console.log(data);
  };

  return (
    <div
      id="contactMe"
      className="py-20 px-4 md:px-20 lg:px-32 dark:bg-slate-950 bg-slate-50"
    >
      <h2 className="text-3xl font-bold mb-12 dark:text-white text-slate-900">
        Contact Me
      </h2>

      <Card className="max-w-2xl mx-auto border-black dark:border-white shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Mail className="w-6 h-6" />
            Contact me
          </CardTitle>
          <CardDescription>Do you have something for me?</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  placeholder="Enter your first name"
                  required
                  {...register("firstName")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  placeholder="Enter your last name"
                  required
                  {...register("lastName")}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                {...register("email")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select required {...register("subject")}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">Freelance opportunity</SelectItem>
                  <SelectItem value="support">Job opportunity</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                {...register("message")}
                id="message"
                placeholder="Type your message here"
                className="min-h-[120px]"
                required
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </form>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button variant="outline" type="reset">
            Clear
          </Button>
          <Button className="gap-2">
            <Send className="w-4 h-4" />
            Send Message
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
