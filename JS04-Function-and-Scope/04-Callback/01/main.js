const checkPermission = function (role, cb1, cb2) {
  if (role === "ADMIN") {
    cb1();
  } else {
    cb2();
  }
};

const grant = () => {
  alert("ACCESS GRANTED");
};

const deny = () => {
  alert("ACCESS DENIED");
};

checkPermission("ADMIN", grant, deny);


