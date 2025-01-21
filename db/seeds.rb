# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


puts "creating the questions"
question = Question.create([
        {
            "title": "How to Check if a key is present in a hash?",
            "tag": "Ruby"
        },
        {
            "title": "How to define a class in Ruby?",
            "tag": "Ruby"
        },
        {
            "title": "How do you concatenate strings in Ruby?",
            "tag": "Ruby"
        },
        {
            "title": "How to check for nil values in Ruby?",
            "tag": "Ruby"
        },
        {
            "title": "How to install React in a Rails app?",
            "tag": "React"
        },
        {
            "title": "How to manage state in React using hooks?",
            "tag": "React"
        },
        {
            "title": "What is JSX in React?",
            "tag": "React"
        },
        {
            "title": "How to pass props between components in React?",
            "tag": "React"
        },
        {
            "title": "How to create a REST API in Node.js?",
            "tag": "Node"
        },
        {
            "title": "What is the difference between `require()` and `import` in Node.js?",
            "tag": "Node"
        },
        {
            "title": "How do you handle asynchronous operations in Node.js?",
            "tag": "Node"
        },
        {
            "title": "How to create a server in Node.js?",
            "tag": "Node"
        },
        {
            "title": "What is the difference between `let`, `const`, and `var` in JavaScript?",
            "tag": "JavaScript"
        },
        {
            "title": "How to remove an element from an array in JavaScript?",
            "tag": "JavaScript"
        },
        {
            "title": "What are JavaScript closures?",
            "tag": "JavaScript"
        }
    ])

puts "questions created"