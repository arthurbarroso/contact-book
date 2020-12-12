(ns contacts.core
  (:require
   [ajax.core :refer [GET]]
   [helix.core :refer [defnc $ <>]]
   [helix.hooks :as hooks]
   [helix.dom :as d]
   ["react-dom" :as dom]
   [contacts.components.nav :refer [nav]]
   [contacts.components.contact-list :refer [contact-list]]
   [contacts.components.contact-form :refer [contact-form]]))


(defnc app []
  (let [[state set-state] (hooks/use-state nil)]
    (hooks/use-effect
     :once
     (GET "http://localhost:4000/api/contacts"
       {:handler (fn [response]
                   (set-state response))}))
      (if state
        (<>
       ($ nav)
       (d/div {:class '[container pt-4]}
              ($ contact-list {:contacts state})
              ($ contact-form {:contact (first state)})))
        
        (d/p "Loading..."))))

(defn ^:export ^:dev/after-load init []
  (dom/render ($ app) (js/document.getElementById "app")))
