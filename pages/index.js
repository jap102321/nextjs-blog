import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Dear all! My name is [Juan Pablo] and I am happy to introduce myself
          as a 19 year old developer looking to start a successful career in
          technology. With a passion for coding and continuous learning, I was
          ready to take my first job as a front-end developer and make a
          positive impact. When I was 19, I entered the world of front-end
          development, improving my HTML, CSS, and JavaScript skills. I am
          always expanding my knowledge and keeping up with the latest business
          trends and best practices. With a strong emphasis on design and a
          focus on creating intuitive user interfaces, I aim to create seamless
          and visually appealing digital experiences. My journey as a front-end
          developer began with a deep curiosity and thirst for knowledge. I have
          completed various online courses and personal projects where I have
          gained experience and faced real world challenges. This experience
          allowed me to develop problem solving skills and the ability to work
          well both independently and as part of a team. What sets me apart is
          my unwavering determination and drive to constantly improve as a
          developer. I grow in a fast-paced environment and am ready to take on
          new challenges that push me out of my comfort zone. The key to success
          is technical ability, flexibility and a willingness to learn
          throughout life. As I embarked on this exciting journey, I was looking
          for my first job as a front-end developer where I could use my skills,
          creativity and innovative ideas to build effective web applications. I
          believe that my dedication, strong work ethic and willingness to learn
          will make me a valuable asset to any team. Thanks for watching my
          talk. I am looking for opportunities to network with industry experts,
          contribute and grow as a key developer. Let's design innovative and
          user-centric digital experiences!
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
