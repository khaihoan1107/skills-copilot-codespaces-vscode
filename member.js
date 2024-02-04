function skillsMember() {
  return {
    name: "skillsMember",
    type: "MemberExpression",
    message: "MemberExpression",
  };
}

function skillsCallExpression() {
  return {
    name: "skillsCallExpression",
    type: "CallExpression",
    message: "CallExpression",
  };
}

function skillsIdentifier() {
  return {
    name: "skillsIdentifier",
    type: "Identifier",
    message: "Identifier",
  };
}

function skillsLiteral() {
  return {
    name: "skillsLiteral",
    type: "Literal",
    message: "Literal",
  };
}
