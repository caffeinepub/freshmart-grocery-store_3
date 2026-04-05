import Map "mo:core/Map";
import Text "mo:core/Text";
import Float "mo:core/Float";
import List "mo:core/List";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      Nat.compare(product1.id, product2.id);
    };
  };

  type Product = {
    id : Nat;
    name : Text;
    category : Text;
    price : Float;
    description : Text;
    imageUrl : Text;
    inStock : Bool;
    rating : Float;
  };

  public type UserProfile = {
    name : Text;
  };

  var nextProductId = 19;

  let productsStore = Map.fromIter<Nat, Product>([
    (
      0,
      {
        id = 0;
        name = "Apple";
        category = "Fruits";
        price = 0.99;
        description = "Fresh and juicy red apples.";
        imageUrl = "/images/products/apple.png";
        inStock = true;
        rating = 4.5;
      },
    ),
    (
      1,
      {
        id = 1;
        name = "Banana";
        category = "Fruits";
        price = 1.99;
        description = "Ripe yellow bananas full of nutrients.";
        imageUrl = "/images/products/banana.png";
        inStock = true;
        rating = 4.3;
      },
    ),
    (
      2,
      {
        id = 2;
        name = "Carrot";
        category = "Vegetables";
        price = 0.89;
        description = "Crunchy and sweet carrots.";
        imageUrl = "/images/products/carrot.png";
        inStock = true;
        rating = 4.2;
      },
    ),
    (
      3,
      {
        id = 3;
        name = "Broccoli";
        category = "Vegetables";
        price = 2.49;
        description = "Fresh green broccoli heads.";
        imageUrl = "/images/products/broccoli.png";
        inStock = true;
        rating = 4.1;
      },
    ),
    (
      4,
      {
        id = 4;
        name = "Milk";
        category = "Dairy";
        price = 3.99;
        description = "Organic whole milk.";
        imageUrl = "/images/products/milk.png";
        inStock = true;
        rating = 4.7;
      },
    ),
    (
      5,
      {
        id = 5;
        name = "Cheese";
        category = "Dairy";
        price = 5.99;
        description = "Aged cheddar cheese.";
        imageUrl = "/images/products/cheese.png";
        inStock = true;
        rating = 4.6;
      },
    ),
    (
      6,
      {
        id = 6;
        name = "Chicken Breast";
        category = "Meat";
        price = 7.99;
        description = "Boneless skinless chicken breasts.";
        imageUrl = "/images/products/chicken.png";
        inStock = true;
        rating = 4.4;
      },
    ),
    (
      7,
      {
        id = 7;
        name = "Ground Beef";
        category = "Meat";
        price = 9.99;
        description = "Premium lean ground beef.";
        imageUrl = "/images/products/beef.png";
        inStock = true;
        rating = 4.5;
      },
    ),
    (
      8,
      {
        id = 8;
        name = "Bread";
        category = "Bakery";
        price = 2.99;
        description = "Freshly baked whole wheat bread.";
        imageUrl = "/images/products/bread.png";
        inStock = true;
        rating = 4.8;
      },
    ),
    (
      9,
      {
        id = 9;
        name = "Croissant";
        category = "Bakery";
        price = 3.99;
        description = "Buttery and flaky croissants.";
        imageUrl = "/images/products/croissant.png";
        inStock = true;
        rating = 4.9;
      },
    ),
    (
      10,
      {
        id = 10;
        name = "Orange Juice";
        category = "Beverages";
        price = 4.99;
        description = "Freshly squeezed orange juice.";
        imageUrl = "/images/products/orange-juice.png";
        inStock = true;
        rating = 4.7;
      },
    ),
    (
      11,
      {
        id = 11;
        name = "Coffee";
        category = "Beverages";
        price = 8.99;
        description = "Ground Arabica coffee beans.";
        imageUrl = "/images/products/coffee.png";
        inStock = true;
        rating = 4.8;
      },
    ),
    (
      12,
      {
        id = 12;
        name = "Potato Chips";
        category = "Snacks";
        price = 2.99;
        description = "Crunchy salted potato chips.";
        imageUrl = "/images/products/chips.png";
        inStock = true;
        rating = 4.3;
      },
    ),
    (
      13,
      {
        id = 13;
        name = "Chocolate Bar";
        category = "Snacks";
        price = 1.99;
        description = "Rich milk chocolate bar.";
        imageUrl = "/images/products/chocolate.png";
        inStock = true;
        rating = 4.6;
      },
    ),
    (
      14,
      {
        id = 14;
        name = "Lettuce";
        category = "Vegetables";
        price = 1.49;
        description = "Fresh green iceberg lettuce.";
        imageUrl = "/images/products/lettuce.png";
        inStock = true;
        rating = 4.2;
      },
    ),
    (
      15,
      {
        id = 15;
        name = "Yogurt";
        category = "Dairy";
        price = 3.49;
        description = "Creamy plain yogurt.";
        imageUrl = "/images/products/yogurt.png";
        inStock = true;
        rating = 4.1;
      },
    ),
    (
      16,
      {
        id = 16;
        name = "Eggs";
        category = "Dairy";
        price = 2.99;
        description = "Farm fresh organic eggs.";
        imageUrl = "/images/products/eggs.png";
        inStock = true;
        rating = 4.2;
      },
    ),
    (
      17,
      {
        id = 17;
        name = "Pork Chops";
        category = "Meat";
        price = 10.99;
        description = "Juicy boneless pork chops.";
        imageUrl = "/images/products/pork.png";
        inStock = true;
        rating = 4.4;
      },
    ),
    (
      18,
      {
        id = 18;
        name = "Salmon Fillets";
        category = "Meat";
        price = 14.99;
        description = "Fresh wild-caught salmon fillets.";
        imageUrl = "/images/products/salmon.png";
        inStock = true;
        rating = 4.3;
      },
    ),
  ].values());

  // Initialize the access control state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profiles store
  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile management

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Product queries (public - no authentication required)

  public query func getAllProducts() : async [Product] {
    productsStore.values().toArray().sort();
  };

  public query func getProductsByCategory(category : Text) : async [Product] {
    let filteredProducts = List.empty<Product>();
    for (product in productsStore.values()) {
      if (Text.equal(product.category, category)) {
        filteredProducts.add(product);
      };
    };
    filteredProducts.toArray().sort();
  };

  public query func getProductById(id : Nat) : async ?Product {
    productsStore.get(id);
  };

  public query func searchProductsByName(searchTerm : Text) : async [Product] {
    let results = productsStore.values().toArray().filter(func(product) { product.name.toLower().contains(#text (searchTerm.toLower())) });
    results.sort();
  };

  // Admin actions (admin-only)

  public shared ({ caller }) func addProduct(product : Product) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add products");
    };
    let newProduct = {
      product with
      id = nextProductId;
    };
    productsStore.add(nextProductId, newProduct);
    nextProductId += 1;
  };

  public shared ({ caller }) func updateProduct(id : Nat, product : Product) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update products");
    };
    if (not (productsStore.containsKey(id))) {
      Runtime.trap("Product not found");
    };
    let updatedProduct = {
      product with
      id;
    };
    productsStore.add(id, updatedProduct);
  };

  public shared ({ caller }) func deleteProduct(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete products");
    };
    productsStore.remove(id);
  };

  // Filtering (public - no authentication required)

  public query func getProductsByAvailability(inStock : Bool) : async [Product] {
    let filteredProducts = List.empty<Product>();
    for (product in productsStore.values()) {
      if (product.inStock == inStock) {
        filteredProducts.add(product);
      };
    };
    filteredProducts.toArray().sort();
  };

  public query func getProductsByPriceRange(minPrice : Float, maxPrice : Float) : async [Product] {
    let filteredProducts = List.empty<Product>();
    for (product in productsStore.values()) {
      if (product.price >= minPrice and product.price <= maxPrice) {
        filteredProducts.add(product);
      };
    };
    filteredProducts.toArray().sort();
  };

  public query func getProductsByRating(minRating : Float) : async [Product] {
    let filteredProducts = List.empty<Product>();
    for (product in productsStore.values()) {
      if (product.rating >= minRating) {
        filteredProducts.add(product);
      };
    };
    filteredProducts.toArray().sort();
  };
};
