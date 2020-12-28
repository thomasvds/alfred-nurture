const alfy = require('alfy');

const data = await alfy.fetch(`${process.env.NURTURE_HOST}/people`, {
  headers: {
    Authorization: `token ${process.env.NURTURE_API_TOKEN}`
  }
});

const items = alfy
  .inputMatches(data, 'name')
	.map(person => ({
    title: person.name,
    autocomplete: person.name,
		subtitle: person.nickname,
		arg: person.id
	}));

alfy.output(items);