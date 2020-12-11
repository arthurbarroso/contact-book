(ns contacts.core
  (:require
   [ajax.core :refer [GET]]
   [helix.core :refer [defnc $ <>]]
   [helix.hooks :as hooks]
   [helix.dom :as d]
   ["react-dom" :as dom]
   [contacts.components.nav :refer [nav]]))


(defnc app []
  (let [[state set-state] (hooks/use-state nil)]
    (hooks/use-effect
     :once
     (GET "http://localhost:4000/api/contacts"
       {:handler (fn [response]
                   (.log js/console response))})))
  (<>
   ($ nav)))

(defn ^:export ^:dev/after-load init []
  (dom/render ($ app) (js/document.getElementById "app")))
