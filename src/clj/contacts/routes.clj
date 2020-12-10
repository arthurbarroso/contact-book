(ns contacts.routes
  (:require [contacts.contacts :refer [get-contacts]]))

(def ping-routes
  ["/ping" {:get (fn [req]
                   {:status 200
                    :body {:hello "world"}})}])

(def contact-routes
  ["/contacts" {:get get-contacts}]