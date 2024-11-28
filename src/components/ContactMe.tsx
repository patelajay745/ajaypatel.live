import React, { FC } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export const ContactMeSection: FC = () => {
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const { register, handleSubmit, reset, control } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    setIsLoading(true);
    setError("");
    try {
      const formBody = Object.keys(data)
        .map(
          (key) =>
            encodeURIComponent(key) +
            "=" +
            encodeURIComponent(data[key as keyof Inputs])
        )
        .join("&");

      const response = await fetch("https://backend.ajaypatel.live", {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      // const responseData = await response.json();

      if (response.status !== 200) {
        throw new Error("Failed to send message");
      }

      reset();
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    reset();
    setError("");
  };

  return (
    <div
      id="contactMe"
      className="py-20 px-4 md:px-20 lg:px-32 dark:bg-slate-950 bg-slate-50 "
    >
      <h2 className="text-3xl font-bold mb-12 dark:text-white text-slate-900">
        Contact Me
      </h2>

      <Card className="dark:border-white max-w-2xl mx-auto border-black dark:shadow-5xl dark:shadow-black  shadow-2xl">
        <CardHeader></CardHeader>

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
              <Controller
                name="subject"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">
                        Freelance opportunity
                      </SelectItem>
                      <SelectItem value="support">Job opportunity</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
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
              <Alert variant="destructive" className="border-white">
                <AlertCircle className="h-4 w-4 border-white" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="flex justify-between">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                onClick={handleClear}
                disabled={isLoading}
                className={`dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 
                ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                Clear
              </HoverBorderGradient>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                disabled={isLoading}
                className={`dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 
                  ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                Send Message
              </HoverBorderGradient>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
};
