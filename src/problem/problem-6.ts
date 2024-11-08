{
  // Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(profile: Profile, updateInfos: Partial<Profile>): Profile {
    return { ...profile, ...updateInfos };
  }

  const myProfile: Profile = {
    name: 'Khaled',
    age: 12,
    email: 'khaled@example.com',
  };
  console.log(updateProfile(myProfile, { age: 28 })); // { name: 'Khaled', age: 28, email: 'khaled@example.com', }
}
