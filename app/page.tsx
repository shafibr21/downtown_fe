'use client'

import { Navbar } from '@/components/navbar'
import { FeaturedArticle } from '@/components/featured-article'
import { ArticleCard } from '@/components/article-card'
import { Sidebar } from '@/components/sidebar'
import { Carousel } from '@/components/carousel'
import { CategoryTabs } from '@/components/category-tabs'
import { useState } from 'react'
import Image from 'next/image'
import { AlarmClock } from 'lucide-react'

const latestArticles = [
  {
    id: '1',
    title: 'Unconventional Workouts That Torch Fat And Sculpt Muscle',
    image: 'demo-25.jpg',
    date: '2024-02-17',
  },
  {
    id: '2',
    title: 'Millions of Indigenous People May Lose Voting Rights: Alliance',
    image: 'demo-30.jpg',
    date: '2024-02-17',
  },
  {
    id: '3',
    title: "Crismonita Dwi Putri, RI's Track Cycling Athlete for Asian Games",
    image: 'demo-48.jpg',
    date: '2024-02-17',
  },
  {
    id: '4',
    title: 'President Joko "Jokowi" Widodo Refuses to Sign MD3 Law',
    image: 'demo-32.jpg',
    date: '2024-02-17',
  },
  {
    id: '5',
    title: 'Garuda operates larger planes for Jakarta-Palembang route',
    image: 'demo-33.jpg',
    date: '2024-02-17',
  },
]

const highlightArticles = [
  {
    id: '6',
    title: 'More than 70,000 homeless after deadly Lombok quake',
    image: 'demo-49.jpg',
    date: '2018-08-10',
  },
  {
    id: '7',
    title: 'Tourists from Singapore are frequent users of Airbnb in South Korea',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=80&h=80&fit=crop',
    date: '2018-08-10',
  },
  {
    id: '8',
    title: "Indonesia's Largest Fleet Of Taxis Teams Up To Beat Ride-hailing Apps",
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=80&h=80&fit=crop',
    date: '2018-08-10',
  },
  {
    id: '9',
    title: 'Tour showcases shared art history of Indonesia and Singapore',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=80&h=80&fit=crop',
    date: '2018-08-10',
  },
]

const recentNews = [
  {
    id: '10',
    title: 'Indonesia Among Top 10 Destinations For Chinese Tourists In 2017',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=80&h=80&fit=crop',
    author: 'JOHN DOE',
    date: '2018-08-08',
    commentCount: 0,
  },
  {
    id: '11',
    title: 'Indonesia To Offer Infrastructure Projects At IMF-World Bank Meeting',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=80&h=80&fit=crop',
    author: 'JOHN DOE',
    date: '2018-08-08',
    commentCount: 0,
  },
  {
    id: '12',
    title: 'Ngurah Rai International Airport To Close For 24 Hours For Nyepi',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=80&h=80&fit=crop',
    author: 'JOHN DOE',
    date: '2018-08-14',
    commentCount: 0,
  },
  {
    id: '13',
    title: 'The Chinese smartphone upstarts taking on Apple and Samsung',
    image: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?w=80&h=80&fit=crop',
    author: 'JOHN DOE',
    date: '2018-08-10',
    commentCount: 0,
  },
]

const carouselItems = [
  {
    id: 'carousel-1',
    title: 'A Digital Media Startup Growing Up With Millennial Women',
    image: 'demo-14.jpg',
  },
  {
    id: 'carousel-2',
    title: 'Indonesia To Offer Infrastructure Projects At IMF-World Bank Meeting',
    image: 'demo-21.jpg',
  },
  {
    id: 'carousel-3',
    title: 'Ngurah Rai International Airport To Close For 24 Hours For Nyepi',
    image: 'demo-15.jpg',
  },
]

const opinionArticles = [
  {
    id: '14',
    title: 'Tour showcases shared art history of Indonesia and Singapore',
    date: '2024-02-17',
  },
  {
    id: '15',
    title: 'Finland Has An Education System The Other Country Should Learn From',
    date: '2024-02-17',
  },
  {
    id: '16',
    title: 'Women in Politics: Urgency of Quota System For Women in Regional Elections',
    date: '2024-02-17',
  },
  {
    id: '17',
    title: "China's Peng banned and fined for Wimbledon corruption attempt",
    date: '2024-02-17',
  },
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Unified Responsive Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {/* Left Sidebar - Hidden on mobile */}
          <div className="hidden space-y-8 md:col-span-1 md:block">
            <Sidebar title="The Latest">
              <div className="space-y-4">
                {latestArticles.map((article) => (
                  <div key={article.id} className="flex gap-4  pb-4 last:border-b-0">
                    <div className="hidden h-22.5 w-22.5 shrink-0 overflow-hidden lg:block">
                      <Image 
                        src={article.image || "/placeholder.svg"} 
                        alt={article.title} 
                        className="h-full w-full object-cover"
                        width={90}
                        height={90} 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold leading-tight text-gray-900">{article.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </Sidebar>

            {/* Opinion Section - Desktop only */}
            <Sidebar title="Opinion">
              <div className="space-y-4">
                {opinionArticles.map((article) => (
                  <div
                    key={article.id}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-1 text-gray-400">▸</span>
                    <button className="flex-1 text-left text-sm leading-snug text-gray-900 hover:underline">
                      {article.title}
                    </button>
                  </div>
                ))}
              </div>
            </Sidebar>
          </div>

          {/* Main Content */}
          <div className="space-y-6 md:col-span-2 lg:space-y-8">
            {/* Carousel */}
            <div>
              <Carousel items={carouselItems} />
            </div>

            {/* Featured Article */}
            <FeaturedArticle
              image="demo-34.jpg"
              category="POLITICS"
              title="'Election was rigged' says opposition, police confirm three dead"
              excerpt="When we get out of the glass bottle of our ego and when we escape like the squirrels in the..."
              author="JOHN DOE"
              date="2020-02-17"
              commentCount={0}
            />

            {/* Article Grid - Hidden on mobile, shown on desktop */}
            <div className="hidden gap-6 sm:grid-cols-2 lg:grid">
              <div className="overflow-hidden bg-card">
                <Image
                  src="demo-2.jpg"
                  alt="Article"
                  className="h-48 w-full object-cover"
                  width={400}
                  height={300}
                />
                <div className="p-4">
                  <h3 className="mb-2 text-sm font-bold">Grab tackles Jakarta's odd-even license plate policy with special algorithm</h3>
                  <p className="text-xs text-muted-foreground">February 17, 2020</p>
                </div>
              </div>

              <div className="overflow-hidden bg-card">
                <Image
                  src="demo-12.jpg"
                  alt="Article"
                  className="h-48 w-full object-cover"
                  width={400}
                  height={300}
                />
                <div className="p-4">
                  <h3 className="mb-2 text-sm font-bold">Jokowi supporters try to prevent anti-Jokowi activist from entering Batam</h3>
                  <p className="text-xs text-muted-foreground">August 10, 2018</p>
                </div>
              </div>
            </div>

            {/* Mobile Article List */}
            <div className="space-y-4 md:hidden">
              {latestArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  image={article.image}
                  date={article.date}
                  variant="horizontal"
                />
              ))}
            </div>

            {/* Mobile Highlights */}
            <div className="md:hidden">
              <Sidebar title="Highlights">
                <CategoryTabs categories={['ALL', 'BUSINESS']} onSelect={setSelectedCategory} />
                <div className="mt-4 space-y-3">
                  {highlightArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      title={article.title}
                      image={article.image}
                      date={article.date}
                      variant="horizontal"
                    />
                  ))}
                </div>
              </Sidebar>
            </div>

            {/* Mobile Recent News */}
            <div className="md:hidden">
              <Sidebar title="Recent News">
                <div className="space-y-4">
                  {recentNews.map((article) => (
                    <ArticleCard
                      key={article.id}
                      title={article.title}
                      image={article.image}
                      author={article.author}
                      date={article.date}
                      commentCount={article.commentCount}
                      variant="horizontal"
                    />
                  ))}
                </div>
                <button className="mt-4 w-full border border-foreground py-2 text-xs font-bold tracking-wide hover:bg-foreground hover:text-background">
                  LOAD MORE
                </button>
              </Sidebar>
            </div>
          </div>

          {/* Right Sidebar - Desktop only */}
          <div className=" space-y-8 lg:col-span-1 lg:block">
            {/* Featured Opinion */}
            <div className="overflow-hidden bg-car h-85 bg-white">
              <div className="relative">
                <Image
                  src="demo-24.jpg"
                  alt="Opinion"
                  className="h-40 w-full object-cover"
                  width={400}
                  height={300}
                />
                <div className="absolute left-4 top-4 bg-yellow-400 px-3 py-1 text-xs font-bold text-white">
                  OPINION
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-sm font-bold">Democratic Party politician calls Prabowo 'cardboard general'</h3>
                <div className='flex items-center gap-1'>
                  <p className="text-xs text-muted-foreground">by <span className="font-semibold">JOHN DOE</span></p>
                  <AlarmClock className='inline w-3 h-3 mx-1'/>
                  <p  className="text-xs text-muted-foreground"> August 10, 2018</p>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...</p>
              </div>
            </div>

            {/* Lifestyle Article */}
            <div className="overflow-hidden b-car h-85 bg-white">
              <div className="relative">
                <Image
                  src="demo-49.jpg"
                  alt="Lifestyle"
                  className="h-40 w-full object-cover"
                  width={400}
                  height={300}
                />
                <div className="absolute left-4 top-4 bg-pink-500 px-3 py-1 text-xs font-bold text-white">
                  LIFESTYLE
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-sm font-bold">Google tracks location data even when users turn service off</h3>
                <div className='flex items-center gap-1'>
                  <p className="text-xs text-muted-foreground">by <span className="font-semibold">JOHN DOE</span></p>
                  <AlarmClock className='inline w-3 h-3 mx-1'/>
                  <p  className="text-xs text-muted-foreground"> August 10, 2018</p>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
