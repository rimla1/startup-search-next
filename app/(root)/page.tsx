import StartupCard from '@/components/StartupCard';
import SearchForm from '../../components/SearchForm';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: 'Rimla'
      },
      _id: 1,
      description: "This is the description",
      image: "https://scx2.b-cdn.net/gfx/news/hires/2019/3-robot.jpg",
      category: "Robots",
      title: "We robots",
    },
  ];

  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search Results for "${query}"` : 'All Startups'}
        </p>
        <ul className='mt-7 card_grid'>
          {posts.length > 0 ? (posts.map((post: StartupCardType, index: number) => (
            <StartupCard key={post?._id} post={post}/>
          )

          )) : (<p className='no-results'>No startups found</p>)}
        </ul>
      </section>
    </>
  );
}
