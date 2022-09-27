# Inventory Management App

Inventory Management Web App (App and API).

## Add User

```
{
    "firstName": "user-first-name",
    "lastName": "user-last-name",
    "email": "user-email",
    "password": "user-password"
}
```

## Login

```
{
    "email": "user-email",
    "password": "user-password"
}
```

## Add Item

```
{
    "name": "store-name",
    "address": "store-address",
    "contactNo": "store-contact-number",
    "menu": [
        {
            "itemId": "drink-id-cocktaildb",
            "name": "drink-name-cocktaildb",
            "price": price
        }
    ]
}
```

## Add Category

```
{
    "userName": "user-name",
    "address": "user-address",
    "contactNo": "user-contact-details",
    "items": [
        {
            "name": "drink-name-cocktaildb",
            "price": price,
            "quantity": quantity
        }
    ],
    "total": total-price
}
```

