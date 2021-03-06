(ns contacts.components.contact-form
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [contacts.utils :refer [make-label-str
                                    contact-form-fields]]))



(defnc contact-display-item [{:keys [label value]}]
  (d/p
   (d/strong (make-label-str label))
   value))

(defnc contact-display [{:keys [contact]}]
  (<>
   (map-indexed (fn [i v]
                  ($ contact-display-item {:label v
                                           :value (get contact (keyword v))
                                           :key i})
                  ) contact-form-fields)))


(defnc contact-edit-form [{:keys [label value on-change]}]
  (d/div 
   (d/label {:for label} (make-label-str label)
            (d/input {:id label
                      :value value
                      :on-change on-change}))))

(defnc contact-edit [{:keys [contact]}]
(let [[state set-state] (hooks/use-state contact)]
  (d/form 
   (map-indexed
    (fn [i v]
      ($ contact-edit-form {:label v
                            :key i
                            :value (get state (keyword v))
                            :on-change #(set-state 
                                         (assoc state (keyword v)
                                                (.. %
                                                 -target
                                                 -value)))})) contact-form-fields))))

(defnc contact-form [{:keys [contact]}]
  (let [[edit set-edit] (hooks/use-state false)]
      (d/div
       (d/h1 "Contact Form")
       (d/button {:on-click #(set-edit (not edit))} "toggle")
       (if edit
         ($ contact-edit {:contact contact})
         ($ contact-display {:contact contact})))))