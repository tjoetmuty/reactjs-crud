const UserList = () => {
  const users = [];
  return <div className="grid gap-5 md:grid-cols-2">
    {users.length ?  : renderCard() <p>No</p>}
  </div>;
};

export default UserList;
