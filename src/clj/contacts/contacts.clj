(ns contacts.contacts
  (:require [contacts.db :as db]))

(defn get-contacts [req]
  {:status 200
   :body (db/get-contacts db/config)})

(defn create-contact
  [{:keys [parameters]}]
  (let [data (:body parameters)
        created-id (db/insert-contact db/config data)]
    {:status 201
     :body (db/get-contact-by-id db/config created-id)}))

(defn get-contact-by-id
  [{:keys [parameters]}]
  (let [id (:path parameters)]
  {:status 200
    :body (db/get-contact-by-id db/config id)}))

(defn delete-contact
  [{:keys [parameters]}]
  (let [id (:path parameters)
        before-deleted (db/get-contact-by-id db/config id)]
    (db/delete-contact-by-id db/config id)
    {:status 200
     :body {:deleted true
            :contact before-deleted}}))

(defn update-contact
  [{:keys [parameters]}]
  (let [id (get-in parameters [:path :id])
        body (:body parameters)
        data (assoc body :id id)]
    (db/update-contact db/config data)
      {:status 200
       :body (db/get-contact-by-id db/config {:id id})}))