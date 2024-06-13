function skillsMembers() {
  var members = [
    { name: 'John', skills: ['JavaScript', 'React', 'Node'] },
    { name: 'Jane', skills: ['JavaScript', 'Angular', 'Python'] },
  ];

  members.forEach(member => {
    console.log(`${member.name} knows ${member.skills.join(', ')}`);
  });
}