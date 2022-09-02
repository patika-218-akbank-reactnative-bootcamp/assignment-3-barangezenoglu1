
function contactListGenerator(number) {
  let data = [];
  for (let i = 1; i < number; i++) {
    let filledList = {
      id: i,
      contactName: `User${i}`,
      profilePhoto: `https://xsgames.co/randomusers/assets/avatars/male/${i}.jpg`,
      lastSeen: "Last seen 2023",
    };
    data.push(filledList);
  };
  return data;
}

export const preparedContacts = contactListGenerator(20);

