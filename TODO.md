# TODO

## Perfect pitch
 + Fonction pour générer un bruit (utiliser Tone.js ? ou tout refaire manuellement avec l'AudioAPI ?)
 + Relier correctement chaque note jouée à chaque element correspondant (eventListener dans la fonction de création des piano);
 + Relier les notes au clavier de l'utilisateur
  + KeyCode
  + MIDI

 + Ajouter le système d'exercice
  + Cliquer sur un bouton joue une note aléatoire
  + L'utilisateur doit choisir la note correspondante sur le clavier
   + Il choisit au préalable s'il veut activer ou non le retour du son du clavier
  + Il doit ensuite valider, et est récompensé d'un point si la réponse est bonne

  + Affichage Scoring
   + Points totaux
   + Série courante
   + Meilleure Série

  + Bonus :
   + Timer le jeu est diminuer le temps pour trouver la bonne note plus la série courante est longue