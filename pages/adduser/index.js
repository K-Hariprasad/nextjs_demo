import NewUser from "../../components/NewUser";
function AddUser() {
  const handleForm = async (user) => {
    const res = await fetch(`/api/newuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };
  return <NewUser handleForm={handleForm} />;
}

export default AddUser;
