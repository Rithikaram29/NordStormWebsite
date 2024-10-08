
const Navbar = () => {
  const navbarcomponents = [
    {
      name: "New",
      color: "#186adc",
    },
    {
      name: "Clearance",
      color: "#b80009",
    },
    {
      name: "Women",
      color: "black",
    },
    {
      name: "Men",
      color: "black",
    },
    {
        name: "Kids",
        color: "black",
      },
    {
      name: "Shoes",
      color: "black",
    },
    {
      name: "Bags&Accessories",
      color: "black",
    },
    {
      name: "Home",
      color: "black",
    },

    {
      name: "Beauty",
      color: "black",
    },

    {
      name: "Gift Guide",
      color: "black",
    },
    {
      name: "Flash Events",
      color: "#186adc",
    },
  ];

  return (
    <>
      <div className="flex justify-around border-t border-gray-300 mr-5 ml-5 p-2">
        {navbarcomponents.map((ele, id) => {
          return (
            <p key={id} className="cursor-pointer hover:underline" style={{color: ele.color}}>
              {ele.name}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;