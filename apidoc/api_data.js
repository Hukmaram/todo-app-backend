define({ "api": [
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friends/accept/friend/request",
    "title": "api for Accepting Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>Id of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>Id of the Reciever(Login User). (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever(Login User). (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Accepted Friend Request\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/friends-route.js",
    "groupTitle": "friends",
    "name": "GetApiV1FriendsAcceptFriendRequest"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friends/cancel/friend/request",
    "title": "api to Cancel Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>Id of the Sender(Login User). (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender(Login User). (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>Id of the Reciever. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Canceled Friend Request\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/friends-route.js",
    "groupTitle": "friends",
    "name": "GetApiV1FriendsCancelFriendRequest"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friends/reject/friend/request",
    "title": "api for Rejecting Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>Id of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>Id of the Reciever(Login User). (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever(Login User). (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Rejected Friend Request\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/friends-route.js",
    "groupTitle": "friends",
    "name": "GetApiV1FriendsRejectFriendRequest"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friends/send/friend/request",
    "title": "api for Sending Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>Id of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>Id of the Reciever. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Friend Request Sent\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/friends-route.js",
    "groupTitle": "friends",
    "name": "GetApiV1FriendsSendFriendRequest"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friends/unfriend/user",
    "title": "api to Unfriend user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>Id of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>Id of the Reciever(Login User). (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever(Login User). (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Canceled Friend Request\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/friends-route.js",
    "groupTitle": "friends",
    "name": "GetApiV1FriendsUnfriendUser"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friends/view/friend/request/recieved/:userId",
    "title": "api for Getting all friends request Recieved.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>Id of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All Recieved Requsts Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5bb7952dfb58ea1178205904\",\n            \"friendRequestRecieved\": [\n                {\n                    \"friendId\": \"SJ70bQL97\",\n                    \"friendName\": \"Ahtesham Sayyed\",\n                    \"_id\": \"5bb8a427bf63d9156cae71e7\"\n                }\n            ]\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/friends-route.js",
    "groupTitle": "friends",
    "name": "GetApiV1FriendsViewFriendRequestRecievedUserid"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friends/view/friend/request/sent/:userId",
    "title": "api for Getting all friends request sent.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All Sent Requsts Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5bb8a1cb7e0dc6148cbf4bc5\",\n            \"friendRequestSent\": [\n                {\n                    \"friendId\": \"SkBEHfS97\",\n                    \"friendName\": \"Hukmaram Bishnoi\",\n                    \"_id\": \"5bb8a427bf63d9156cae71e6\"\n                }\n            ]\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/friends-route.js",
    "groupTitle": "friends",
    "name": "GetApiV1FriendsViewFriendRequestSentUserid"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/items/view/all/items/:userId",
    "title": "api for Getting all items of User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoListId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Items Found and Listed\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5bb8839db223e91708c6f19d\",\n            \"todoItemModifierName\": \"Hukmaram Bishnoi\",\n            \"todoItemModifierId\": \"SkBEHfS97\",\n            \"todoItemModifiedOn\": \"2018-10-06T09:44:54.000Z\",\n            \"todoItemCreatedOn\": \"2018-10-06T09:42:53.000Z\",\n            \"todoItemCreatorName\": \"Hukmaram Bishnoi\",\n            \"todoItemCreatorId\": \"SkBEHfS97\",\n            \"todoItemName\": \"Updated Test Item\",\n            \"todoItemId\": \"r1Bim-Lqm\",\n            \"todoListId\": \"SknkJ-UcX\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/item-route.js",
    "groupTitle": "items",
    "name": "GetApiV1ItemsViewAllItemsUserid"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/items/createitem",
    "title": "api to Add item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoListId",
            "description": "<p>Id of the List. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoItemName",
            "description": "<p>Name of the item. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoItemCreatorId",
            "description": "<p>User Id of the user creating todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoItemCreatorName",
            "description": "<p>User Name of the user creating todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoItemModifierId",
            "description": "<p>User Id of the user modifying todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoItemModifierName",
            "description": "<p>User Name of the user modifying todo. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Item Created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5bb8839db223e91708c6f19d\",\n        \"todoItemModifierName\": \"Hukmaram Bishnoi\",\n        \"todoItemModifierId\": \"SkBEHfS97\",\n        \"todoItemModifiedOn\": \"2018-10-06T09:42:53.000Z\",\n        \"todoItemCreatedOn\": \"2018-10-06T09:42:53.000Z\",\n        \"todoItemCreatorName\": \"Hukmaram Bishnoi\",\n        \"todoItemCreatorId\": \"SkBEHfS97\",\n        \"todoItemName\": \"Test Item\",\n        \"todoItemId\": \"r1Bim-Lqm\",\n        \"todoListId\": \"SknkJ-UcX\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/item-route.js",
    "groupTitle": "items",
    "name": "PostApiV1ItemsCreateitem"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/items/:todoItemId/delete",
    "title": "api to Delete item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoItemId",
            "description": "<p>Id of the item to be deleted. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the Item successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/item-route.js",
    "groupTitle": "items",
    "name": "PostApiV1ItemsTodoitemidDelete"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/items/:todoItemId/updateitem",
    "title": "api to Update item Details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoItemName",
            "description": "<p>Name of the item. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoItemModifierId",
            "description": "<p>User Id of the user modifying todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoItemModifierName",
            "description": "<p>User Name of the user modifying todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoItemDone",
            "description": "<p>yes/no to make item done/undone. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Item details Updated\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/item-route.js",
    "groupTitle": "items",
    "name": "PutApiV1ItemsTodoitemidUpdateitem"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/lists/view/all/lists/:userId",
    "title": "api for Getting all Lists of User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userIds",
            "description": "<p>userId of the users. (Body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Lists Found and Listed\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5bb87ee3625e5006d41f786d\",\n            \"todoListModifiedOn\": \"2018-10-06T09:26:55.000Z\",\n            \"todoListCreatedOn\": \"2018-10-06T09:22:43.000Z\",\n            \"todoListModifierName\": \"Hukmaram Bishnoi\",\n            \"todoListModifierId\": \"SkBEHfS97\",\n            \"todoListCreatorName\": \"Hukmaram Bishnoi\",\n            \"todoListCreatorId\": \"SkBEHfS97\",\n            \"todoListName\": \"Updated Test List\",\n            \"todoListId\": \"SknkJ-UcX\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/list-route.js",
    "groupTitle": "lists",
    "name": "GetApiV1ListsViewAllListsUserid"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/lists/view/all/lists/:userId",
    "title": "api for Getting all Lists of User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Lists Found and Listed\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5bb87ee3625e5006d41f786d\",\n            \"todoListModifiedOn\": \"2018-10-06T09:26:55.000Z\",\n            \"todoListCreatedOn\": \"2018-10-06T09:22:43.000Z\",\n            \"todoListMode\": \"private\",\n            \"todoListModifierName\": \"Hukmaram Bishnoi\",\n            \"todoListModifierId\": \"SkBEHfS97\",\n            \"todoListCreatorName\": \"Hukmaram Bishnoi\",\n            \"todoListCreatorId\": \"SkBEHfS97\",\n            \"todoListName\": \"Updated Test List\",\n            \"todoListId\": \"SknkJ-UcX\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/list-route.js",
    "groupTitle": "lists",
    "name": "GetApiV1ListsViewAllListsUserid"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/createlist",
    "title": "api to Add List.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoListName",
            "description": "<p>Name of the List. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoListCreatorId",
            "description": "<p>User Id of the user creating todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoListCreatorName",
            "description": "<p>User Name of the user creating todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoListModifierId",
            "description": "<p>User Id of the user modifying todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoListModifierName",
            "description": "<p>User Name of the user modifying todo. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \n    \"error\": false,\n    \"message\": \"List Created\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5bb87ee3625e5006d41f786d\",\n        \"todoListModifiedOn\": \"2018-10-06T09:22:43.000Z\",\n        \"todoListCreatedOn\": \"2018-10-06T09:22:43.000Z\",\n        \"todoListModifierName\": \"Hukmaram Bishnoi\",\n        \"todoListModifierId\": \"SkBEHfS97\",\n        \"todoListCreatorName\": \"Hukmaram Bishnoi\",\n        \"todoListCreatorId\": \"SkBEHfS97\",\n        \"todoListName\": \"Test List\",\n        \"todoListId\": \"SknkJ-UcX\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/list-route.js",
    "groupTitle": "lists",
    "name": "PostApiV1ListsCreatelist"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/:todoListId/delete",
    "title": "api to Delete List.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ListId",
            "description": "<p>ListId of the List to be deleted. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the List successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/list-route.js",
    "groupTitle": "lists",
    "name": "PostApiV1ListsTodolistidDelete"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/lists/:todoListId/updatelist",
    "title": "api to Update List Details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoListId",
            "description": "<p>Id of the List. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoListName",
            "description": "<p>Name of the List. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoListModifierId",
            "description": "<p>User Id of the user modifying todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "todoListModifierName",
            "description": "<p>User Name of the user modifying todo. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"List details Updated\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/list-route.js",
    "groupTitle": "lists",
    "name": "PutApiV1ListsTodolistidUpdatelist"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/:userId/details",
    "title": "api for getting user details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"createdOn\": \"2018-09-12T13:42:58.000Z\",\n        \"validationToken\": \"Null\",\n        \"email\": \"hukmaram@gmail.com\",\n        \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n        \"phone\": \"91 7840962887\",\n        \"countryName\": \"India\",\n        \"lastName\": \"Bishnoi\",\n        \"firstName\": \"Hukmaram\",\n        \"userId\": \"B1cyuc8OX\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user-route.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersUseridDetails"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "api for Getting all users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"createdOn\": \"2018-09-12T13:42:58.000Z\",\n            \"validationToken\": \"Null\",\n            \"email\": \"hukmaram@gmail.com\",\n            \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n            \"phone\": \"91 7840962887\",\n            \"countryName\": \"India\",\n            \"lastName\": \"Bishnoi\",\n            \"firstName\": \"Hukmaram\",\n            \"userId\": \"B1cyuc8OX\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user-route.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetPassword",
    "title": "api for Password Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password reset instructions sent successfully\",\n    \"status\": 200,\n    \"data\": None\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user-route.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for Registering User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryName",
            "description": "<p>country Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>phone number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"User Created\",\n\"status\": 200,\n\"data\": [\n    {\n        \"createdOn\": \"2018-09-12T13:42:58.000Z\",\n        \"validationToken\": \"Null\",\n        \"email\": \"hukmaram@gmail.com\",\n        \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n        \"phoner\": \"91 7840962887\",\n        \"countryName\": \"India\",\n        \"lastName\": \"Hukmaram\",\n        \"firstName\": \"Hukmaram\",\n        \"userId\": \"B1cyuc8OX\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user-route.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/:userId/logout",
    "title": "api to logout from application.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user-route.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUseridLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/updatePassword",
    "title": "api for Updating Password after Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "validationToken",
            "description": "<p>validationToken of the user recieved on Email. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>new password of the user . (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password Update Successfully\",\n    \"status\": 200,\n    \"data\": \"None\"\n    \n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user-route.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersUpdatepassword"
  }
] });
