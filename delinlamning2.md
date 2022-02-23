# coolersAutomation
Dokumentation av uppsatt CIVersionshanteringssystem via Github.com.
Gjorde en git clone av repot som ligger p  min github f r att spara ner de nya filerna somadderades.
Skickade uppdatering till github genom git add, git commit och slutgiltigen git push.
Uppdatering av filernas version kan man se i historiken p  min github:https://github.com/Jixyn/testautomationProjekt
Nedladdning av Plug-in p  Jenkins som heter ”GitHub Integration”.Skapa ett Jenkins projekt och kryssa i rutan f r ”GitHub project”.
Kopiera och l gga in URL f r mitt GitHub projekt:https://github.com/Jixyn/testautomationProjekt
Kryssa i ”GitHub hook trigger for GITScm polling” under Build Triggers-delen.
G  till projektet p  GitHub och g   ver till ”Settings”, ”Webhooks”.
L gg till ”Webhook”, kopiera URL fr n Jenkins och klistra in i URL-rutan p  GitHub.
L gg till ”github-webhook/” i slutet av URL.en fr n Jenkins ndra ”Content type” till ”application/json”.
Skapa ”webhook”.
