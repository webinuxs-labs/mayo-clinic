import Image from "next/image"
import Link from "next/link"
import {
  Search,
  ChevronDown,
  ChevronRight,
  User,
  Menu,
  Calendar,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <Link href="/" className="mr-8">
                <Image src="/logo.svg" alt="Mayo Clinic" width={32} height={32} className=" w-auto" />
              </Link>
              <nav className="hidden lg:flex items-center space-x-1">
                <div className="relative group">
                  <button className="px-3 py-2 text-sm font-medium flex items-center">
                    Care at Mayo Clinic <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="px-3 py-2 text-sm font-medium flex items-center">
                    Health Library <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="px-3 py-2 text-sm font-medium flex items-center">
                    For Medical Professionals <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="px-3 py-2 text-sm font-medium flex items-center">
                    Research & Education <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <div className="relative group">
                  <button className="px-3 py-2 text-sm font-medium flex items-center">
                    Giving to Mayo Clinic <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-sm font-medium hidden md:block">Request appointment</button>
              <button className="flex items-center text-sm font-medium hidden md:block">
                <User className="mr-1 h-4 w-4" /> Log in
              </button>
              <button className="p-2">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 lg:hidden">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-[#001233] text-white bg-[url(/banner.avif)]">
          <div className="container mx-auto px-4 pb-20 pt-[400px] md:pb-20 md:pt-[400px]">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-serif mb-6">Transforming your care</h1>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-sm">Learn how we drive innovation</p>
                <span className="hidden sm:inline-block">•</span>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Request appointment
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#001233] to-transparent"></div>
        </section>

        {/* Notice Section */}
        <section className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <div className="h-4 w-4 rounded-full border-2 border-blue-500"></div>
              </div>
              <div>
                <Link href="#" className="text-blue-600 hover:underline">
                  Limited disclosure of patient information among those participating in their study
                </Link>
                <ChevronRight className="inline-block ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="border-b">
          <div className="container mx-auto px-4 py-6 flex gap-5">
            <div className="flex-1">
              <h2 className="text-lg font-medium mb-4">Find Diseases & Conditions by First Letter</h2>
              <div className="grid grid-cols-10 gap-2 mb-6">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map((letter) => (
                  <Link
                    key={letter}
                    href="#"
                    className="flex items-center justify-center h-10 w-10 border rounded-md hover:bg-gray-100"
                  >
                    {letter}
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-10 gap-2 mb-6">
                {["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"].map((letter) => (
                  <Link
                    key={letter}
                    href="#"
                    className="flex items-center justify-center h-10 w-10 border rounded-md hover:bg-gray-100"
                  >
                    {letter}
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-10 gap-2">
                {["U", "V", "W", "X", "Y", "Z", "#"].map((letter) => (
                  <Link
                    key={letter}
                    href="#"
                    className="flex items-center justify-center h-10 w-10 border rounded-md hover:bg-gray-100"
                  >
                    {letter}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Search Diseases & Conditions</h3>
              </div>
              <div className="mt-2 relative">
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border rounded-md w-[400px] md:max-w-xs"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </section>

        {/* Healing Starts Here Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-serif mb-4">Healing starts here</h2>
                <p className="mb-4">The right answers for the right care.</p>
                <p className="mb-4">
                  Effective treatment depends on getting the right diagnosis. Our expert physicians and their teams
                  diagnose and treat the most complex conditions.
                </p>
                <div className="mb-6">
                  <p className="font-medium">Top-ranked in the U.S.</p>
                  <p className="mb-2">
                    Mayo Clinic has more No. 1 rankings than any other hospital according to U.S. News & World Report.
                    Learn more about our exceptional patient experience.
                  </p>
                </div>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Why choose Mayo Clinic
                </Button>
              </div>
              <div>
                <Image
                  src="/healing.avif"
                  alt="Doctor with patient"
                  width={500}
                  height={400}
                  className="rounded-md object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* World-class Care Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/world.avif"
                  alt="Parent with baby"
                  width={500}
                  height={400}
                  className="rounded-md object-cover w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-serif mb-4">World-class care for global patients</h2>
                <p className="mb-6">We make it easy for patients around the world to get care from Mayo Clinic.</p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  International services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h2 className="text-3xl font-serif mb-6">Locations</h2>
                <p className="mb-6">Learn more about Mayo Clinic locations or choose a specific location.</p>

                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 mb-8">
                  Explore all locations
                </Button>
              </div>
              {[
                {
                  title: "Mayo Clinic in Arizona",
                  subtitle: "Phoenix & Scottsdale",
                  image: "/blog/a.avif",
                },
                {
                  title: "Mayo Clinic in Florida",
                  subtitle: "Jacksonville",
                  image: "/blog/b.avif",
                },
                {
                  title: "Mayo Clinic in Minnesota",
                  subtitle: "Rochester",
                  image: "/blog/c.avif",
                },
                {
                  title: "Mayo Clinic Health System",
                  subtitle: "Iowa, Minnesota, Wisconsin",
                  image: "/blog/d.avif",
                },
                {
                  title: "Mayo Clinic Healthcare",
                  subtitle: "London, United Kingdom",
                  image: "/blog/e.avif",
                },
              ].map((location, index) => (
                <div key={index} className="group relative rounded-md overflow-hidden">
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={location.title}
                    width={400}
                    height={250}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                    <h3 className="font-medium">{location.title}</h3>
                    <p className="text-sm">{location.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Care Areas Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif mb-6">Featured care areas</h2>
            <p className="mb-8">We solve the world's most serious and complex medical challenges.</p>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-blue-600 hover:no-underline">
                    Brain tumors (oncology)
                  </AccordionTrigger>
                  <AccordionContent>
                    Information about brain tumors and treatment options at Mayo Clinic.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-blue-600 hover:no-underline">Breast cancer</AccordionTrigger>
                  <AccordionContent>
                    Information about breast cancer diagnosis and treatment at Mayo Clinic.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-blue-600 hover:no-underline">Brain cancer</AccordionTrigger>
                  <AccordionContent>
                    Information about brain cancer diagnosis and treatment at Mayo Clinic.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-blue-600 hover:no-underline">Breast cancer</AccordionTrigger>
                  <AccordionContent>
                    Comprehensive information about breast cancer care at Mayo Clinic.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-blue-600 hover:no-underline">Colon cancer</AccordionTrigger>
                  <AccordionContent>
                    Information about colon cancer diagnosis and treatment at Mayo Clinic.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-blue-600 hover:no-underline">Heart arrhythmias</AccordionTrigger>
                  <AccordionContent>
                    Information about heart arrhythmias diagnosis and treatment at Mayo Clinic.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-blue-600 hover:no-underline">Heart valve disease</AccordionTrigger>
                  <AccordionContent>
                    Information about heart valve disease diagnosis and treatment at Mayo Clinic.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-blue-600 hover:no-underline">
                    Lung cancer (oncology)
                  </AccordionTrigger>
                  <AccordionContent>
                    Information about lung cancer diagnosis and treatment at Mayo Clinic.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-blue-600 hover:no-underline">Lung transplant</AccordionTrigger>
                  <AccordionContent>Information about lung transplant procedures at Mayo Clinic.</AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-blue-600 hover:no-underline">Testicular cancer</AccordionTrigger>
                  <AccordionContent>
                    Information about testicular cancer diagnosis and treatment at Mayo Clinic.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#001233] text-white pt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <Phone className="mr-2 h-5 w-5" /> Find a doctor
                <ChevronRight className="ml-auto h-5 w-5" />
              </h3>
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <Calendar className="mr-2 h-5 w-5" /> Online services
                <ChevronRight className="ml-auto h-5 w-5" />
              </h3>
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <MapPin className="mr-2 h-5 w-5" /> Request an appointment
                <ChevronRight className="ml-auto h-5 w-5" />
              </h3>
            </div>

            {/* Medical Professionals */}
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center">
                Medical Professionals <ChevronDown className="ml-auto h-5 w-5" />
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Appointments
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Mayo Clinic Alumni Association
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Refer a Patient
                  </Link>
                </li>
              </ul>
            </div>

            {/* Researchers */}
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center">
                Researchers <ChevronDown className="ml-auto h-5 w-5" />
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Research at Mayo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Clinical Trials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Financial Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    International Patients
                  </Link>
                </li>
              </ul>
            </div>

            {/* Charitable Care */}
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center">
                Charitable Care & Financial Assistance <ChevronDown className="ml-auto h-5 w-5" />
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Community Health Needs Assessment
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Financial Assistance Department - Arizona
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Financial Assistance Department - Florida
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Financial Assistance Department - Rochester
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-gray-700 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-lg font-medium mb-4">Follow Mayo Clinic</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="hover:text-gray-300">
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="hover:text-gray-300">
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="hover:text-gray-300">
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="hover:text-gray-300">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="hover:text-gray-300">
                    <Youtube className="h-6 w-6" />
                  </Link>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <h3 className="text-lg font-medium mb-4">Get Mayo Clinic app</h3>
                <div className="flex space-x-4">
                  <Link href="#">
                    <Image src="/play.svg" alt="App Store" width={120} height={40} className="h-10 w-auto" />
                  </Link>
                  <Link href="#">
                    <Image src="/app.svg" alt="Google Play" width={120} height={40} className="h-10 w-auto" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Footer */}
          <div className="border-t border-gray-700 py-6 text-xs text-gray-400">
            <div className="flex flex-wrap gap-4 mb-4">
              <Link href="#" className="hover:underline">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline">
                Notice of Privacy Practices
              </Link>
              <Link href="#" className="hover:underline">
                Notice of Nondiscrimination
              </Link>
              <Link href="#" className="hover:underline">
                Accessibility Statement
              </Link>
              <Link href="#" className="hover:underline">
                Advertising & Sponsorship Policy
              </Link>
              <Link href="#" className="hover:underline">
                Site Map
              </Link>
            </div>
            <p>© 1998-2024 Mayo Foundation for Medical Education and Research (MFMER). All rights reserved.</p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <select className="bg-transparent border border-gray-700 rounded px-2 py-1">
                  <option>English</option>
                  <option>Español</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
