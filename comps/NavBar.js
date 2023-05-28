import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  useEffect(() => {
    // updating the navbar background on route changes
    if (router.route === "/") {
      document.getElementById("navbar").classList.remove("navbackground");
    } else {
      document.getElementById("navbar").classList.add("navbackground");
    }
  }, [router]);

  return (
    <nav id="navbar">
      <ul>
        <Link
          href="/resume"
          scroll={false}
          className={
            currentRoute === "/resume" ? "nav-links active" : "nav-links"
          }
        >
          <h4>رزومه</h4>
        </Link>
        <Link
          href="/projects"
          scroll={false}
          className={
            currentRoute === "/projects" ? "nav-links active" : "nav-links"
          }
        >
          <h4>نمونه کار ها</h4>
        </Link>
        <Link
          href="/contactUs"
          scroll={false}
          className={
            currentRoute === "/contactUs" ? "nav-links active" : "nav-links"
          }
        >
          <h4>تماس</h4>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
