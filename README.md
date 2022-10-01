# Inventory Management App

Inventory Management Web App (App and API). 

### Tech Stack
- MongoDB
- Express.js
- React (Material UI)
- Node.js

### Data
- Users
- Categories
- Items

## Add User

Payload for User registration.

```
{
    "name": "Tim Cook",
    "email": "tim@apple.com",
    "password": "iLoveAppleCorp"
}
```

## Login

```
{
    "email": "tim@apple.com",
    "password": "iLoveAppleCorp"
}
```

## Add Category

Only category name is required.

```
{
    "name": "laptops"
}
```

## Add Item

Item has categoryId and categoryName. Item id and name is also saved in category under items array. 

```
{
    "name": "Macbook Air M1",
    "description": "The latest Macbook Air for 2021",
    "quantity": 20,
    "category": {
        "categoryId": "your-category-id",
        "categoryName": "Laptops"
    }
}
```

## Notes
- Delete item or category sets ```isArchived = true```.