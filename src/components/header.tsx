import { Link } from "waku";

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4 p-6 lg:fixed lg:left-0 lg:top-0 bg-red w-[100%]">
      <Link to="/" className="mx-4">
        <img src="/images/THOR_logo_WHITE.svg" className="h-[50px]" />
      </Link>
      <div className="flex space-around align-center">
        <h2 className="font-proxima-nova font-bold uppercase text-[14px] text-white tracking-widest">
          <Link to="/case-studies" className="mx-4">
            Case Studies
          </Link>
          <Link to="/services" className="mx-4">
            Our Services
          </Link>
          <Link to="/how-we-work" className="mx-4">
            How We Work
          </Link>
          <Link to="/concept-vault" className="mx-4">
            Our Design
          </Link>
        </h2>
      </div>
      <div className="font-proxima-nova font-bold uppercase text-[14px] bg-white px-10 py-4 text-black tracking-widest rounded-[5px]">
        Get in Touch
      </div>
    </header>
  );
};
