(ns contacts.utils
  (:require [clojure.string :refer [replace capitalize]]))


(defn make-label-str [l]
  (str (-> l
           (replace "_" " ")
           capitalize)
           ": "))


(def contact-form-fields
  ["first_name" "last_name" "email"])