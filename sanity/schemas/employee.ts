export default {
  name: 'employee',
  title: 'Hall of Vanguards',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'achievement', title: 'Achievement / Stats', type: 'string' },
    { name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } },
    { name: 'isTitan', title: 'Is Current Titan?', type: 'boolean', initialValue: false },
    { name: 'revealDate', title: 'Reveal Date', type: 'datetime' },
  ],
};
