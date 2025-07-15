import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { creditBenefits, features, testimonials } from "@/lib/data";
import { ArrowRight, Check, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="bg-[#ffb980]/30 border-[#d88c5c] px-4 py-2 text-[#f3bc8f] text-sm font-medium"
              >Healthcare made simple</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect with doctors <br/> <span className="gradient-title">anytime, anywhere</span></h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Your complete healthcare companion — book, consult, and stay in control, all from one secure, smart platform.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#d78e60] text-white hover:bg-[#d48758dd]">
                  <Link href={'/onboarding'}>
                    Get Started <ArrowRight className="ml-2 h-4 w-4"/>
                  </Link> 
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[#d88c5c]/30 hover:bg-[#f3b78c]/80">
                  <Link href={'/doctors'}>
                    Find Doctors
                  </Link> 
                </Button>
              </div>
            </div>
            {/*For adding image*/}
            <div className="relative h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
              <Image src={"/banner.png"} alt="Doctor consultation" fill priority className="object-cover md:pt-14 rounded-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How it works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Our platform makes healthcare accessible with just a few clicks</p>
          </div>
          <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)=>{
              return (
                <Card key={index} className="bg-card border-[#d88c5c]/20 hover:border-[#b76e48]/40 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="bg-[#ffb980]/20 p-3 rounded-lg w-fit mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl font-semibold text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#ffb980]/30 border-[#d88c5c] px-4 py-2 text-[#f3bc8f] text-sm font-medium mb-4"
            >Affordable Healthcare</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Consultation Packages</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Choose the perfect consultation package that fits your healthcare
              needs</p>
          </div>
          <div>
            {/*Pricing Table*/}
            <Card className="mt-12 bg-muted/20 border-[#ffb980]/30">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-[#b88c6897]" />
                  How Our Credit System Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {creditBenefits.map((benefit, index)=>{
                    return (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 bg-[#ffb980]/20 p-1 rounded-full">
                          <Check className="h-4 w-4 text-[#b88c6897]"/>
                        </div>
                        <p
                          className="text-muted-foreground"
                          dangerouslySetInnerHTML={{ __html: benefit }}
                        />
                      </li>
                    )
                  })}

                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-[#ffb980]/30 border-[#d88c5c] px-4 py-2 text-[#f3bc8f] text-sm font-medium mb-4"
            >
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Hear from patients and doctors who use our platform</p>
          </div>
          <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index)=>{
              return (
                <Card key={index} className="border-[#d88c5c]/20 hover:border-[#b76e48]/40 transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#ffb980]/20 flex items-center justify-center mr-4">
                        <span className="text-[#f3bc8f] font-bold">{testimonial.initials}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-[#d08c6ac5]/80 to-[#fa9e6f]/20 border-[#c97d55]/20">
              <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to take control of your healthcare?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Join thousands of users who have simplified their healthcare
                    journey with our platform. Get started today and experience
                    healthcare the way it should be.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                    size="lg"
                    className="bg-[#f59e6cbf] text-white hover:bg-[#d08c6ac5]"
                    asChild>
                      <Link href='/sign-up'>Sign Up Now</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-[#e38050]/30 hover:bg-muted/80"
                    >
                      <Link href="/pricing">View Pricing</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
        </div>
      </section>
    </div>


  );
}
