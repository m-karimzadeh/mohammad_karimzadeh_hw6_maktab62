let result = [];
for (const personDataItem of personData) {
  for (const additionalPersonDataItem of additionalPersonData) {
    if (personDataItem.uid === additionalPersonDataItem.uid) {
      result.push({ ...personDataItem, ...additionalPersonDataItem });
    }
  }
}

function read() {
  return result;
}

function create(person) {
  if (typeof person !== "object" || Array.isArray(person) || person === null) {
    return console.log("Input type is invalid.");
  }
  if (
    !person.uid ||
    !person.position ||
    !person.city ||
    !person.firstName ||
    !person.lastName
  ) {
    return console.log("Input type is invalid.");
  }
  let targetPerson = result.find((el) => el.uid === person.uid);
  if (targetPerson) {
    return console.log("Duplicated item.");
  }
  result.push(person);
}

function update(uid, person) {
  if (typeof uid !== "number") {
    return console.log("Input type is invalid.");
  }
  if (typeof person !== "object" || Array.isArray(person) || person === null) {
    return console.log("Input type is invalid.");
  }
  let targetPerson = result.find((el) => el.uid === uid);
  if (!targetPerson) {
    return console.log("Does not exist.");
  }
  if (uid !== person.uid && person.uid) {
    let duplicatedPerson = result.find((el) => el.uid === person.uid);
    if (duplicatedPerson) {
      return console.log("Duplicated item.");
    }
  }
  result = result.map((el) => {
    if (el.uid === uid) {
      return {...el, ...person};
    }
    return el
  });
}

function Delete(uid) {
  if (typeof uid !== "number") {
    return console.log("Input type is invalid.");
  }
  result = result.filter((el) => el.uid !== uid);
}
