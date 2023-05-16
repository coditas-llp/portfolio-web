import { Footer, HeroSection, NavBar } from "coditas-ui";
import { useEffect, useState } from "react";
import { GET } from "../../HTTP";
import needHelp from '../../assets/needHelp.png';
import rightArrow from '../../assets/rightArrow.svg';
import { Loader } from "./Loader";

interface IAsyncProps {
  promise: () => void;
  loader?: JSX.Element;
  content?: JSX.Element;
  error?: JSX.Element;
}

interface INavItem {
  link_name?: string
  link_url?: string
  label: string
  route: string;
}

export const Async = (props: IAsyncProps) => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [navItems, setNavItems] = useState<{ label: string, route: string }[]>([{ label: 'Loading', route: '' }])


  const getNavItems = async () => {
    const response = await GET('/get-content?name=header-menus')
    const items = response.data.map((linkItem: INavItem) => {
      const nav_link = linkItem.link_url?.split('/') || ''

      return {
        ...linkItem, link_url: `/${nav_link[nav_link?.length - 1]}`
      }
    })
    setNavItems(items)
    console.log('>> response', items);
  }

  const getData = async () => {
    try {
      await props?.promise();
      await getNavItems()
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && !hasError &&
        <>
          <NavBar
            // logoBlue={logoBlue}
            bgColor="transparent"
            // logoWhite={logoWhite}
            menuItems={navItems.map((navItem: INavItem) => ({ label: navItem.link_name, route: navItem.link_url })) as any}
          />
          {props.content}
          <HeroSection
            bgImg={needHelp}
            heading="Need help with your business?"
            paragraph="Don’t worry , we got your back "
            buttonStyle={{
              background: "transparent",
              borderRadius: "4px",
              color: "#ffffff",
            }}
            buttonRoute="/contact-us"
            buttonText="Contact Us"
            buttonIcon={rightArrow}
          />
          <Footer />
        </>
      }
      {hasError && !isLoading && props.error}
    </div>
  );
};
