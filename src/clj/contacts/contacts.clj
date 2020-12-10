(ns contacts.contacts
  (:require contacts.db :as db))

(defn get-contacts [req]
  {:status 200
   :body (db/get-contacts db/config)})