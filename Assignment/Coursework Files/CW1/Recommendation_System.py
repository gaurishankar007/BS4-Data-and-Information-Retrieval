import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


# helper functions. Use them when needed
def get_name_from_index(index):
    return df[df.index == index]["name"].values[0]


def get_index_from_name(name):
    return df[df.name == name]["index"].values[0]


# Step 1: Read CSV File
df = pd.read_csv("7817_1.csv")

# Step 2: Select Features
features = ['reviews.text', 'reviews.title']

# Step 3: Create a column in DF which combines all selected features
for feature in features:
    df[feature] = df[feature].fillna('')


def combine_features(row):
    try:
        return row["reviews.text"] + " " + row["reviews.title"]
    except:
        print("Error:"), row


df["combined_features"] = df.apply(combine_features, axis=1)

# Step 4: Define a TF-IDF Vectorizer Object. Remove all english stop words such as 'the', 'a'
tfidf = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf.fit_transform(df["combined_features"])

# Step 5: Compute the Cosine Similarity based on the count_matrix
cosine_sim = cosine_similarity(tfidf_matrix)
product_reviewed_by_user = "Kindle Paperwhite"

# Step 6: Get index of this product from its title
product_index = get_index_from_name(product_reviewed_by_user)
similar_products = list(enumerate(cosine_sim[product_index]))

# Step 7: Get a list of similar products in descending order of similarity score
sorted_similar_products = sorted(similar_products, key=lambda x: x[1], reverse=True)

# Step 8: Print recommended products
i = 0
recommended_products = []
Reviewer = df[df.index == product_index]["reviews.username"].values[0]
for element in sorted_similar_products:
    if get_name_from_index(element[0]) != product_reviewed_by_user:
        if get_name_from_index(element[0]) not in recommended_products:
            recommended_products.append(get_name_from_index(element[0]))
    i = i + 1
    if i > 10:
        break

j = 0
print("")
print("Reviewer => " + Reviewer)
print("Reviewed Product => " + product_reviewed_by_user)
print("<========== Recommending new Products to " + Reviewer + " ==========>")
for i in recommended_products:
    print(str(j+1) + ". " + i)
    j = j + 1

