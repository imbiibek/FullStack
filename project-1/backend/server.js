import express from 'express';

const app = express();

// app.get('/' , (req, res) => {
//     res.send("Server is ready")
// })

// get jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
  {
    id: 1,
    title: 'A joke',
    content: 'This is a joke'
  },
  {
    id: 2,
    title: 'Another joke',
    content: 'This is another joke'
  },
  {
    id: 3,
    title: 'Programmer life',
    content: 'Why do programmers prefer dark mode? Because light attracts bugs.'
  },
  {
    id: 4,
    title: 'Debugging',
    content: 'There are only 10 types of people: those who understand binary and those who don\'t.'
  },
  {
    id: 5,
    title: 'Coffee',
    content: 'I would tell you a UDP joke, but you might not get it.'
  },
  {
    id: 6,
    title: 'Git',
    content: 'I told my computer I needed a break, and now it won\'t stop sending me Kit-Kat ads.'
  },
  {
    id: 7,
    title: 'Frontend',
    content: 'Why was the CSS file sad? It had too many issues with its parent.'
  }
];
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Serve at localhost:${port}`)
})