//NOTE: This is a quick-and-dirty Google Translation (for verifying the localization system is working)
var STRINGS_DE = {
    "UNKNOWN_WIDGET": "Diese Schaltfläche verweist auf einen unbekannten oder nicht unterstützten Widget: {widget}",
    "UNKNOWN_COMMAND_REFERENCE": "Diese Schaltfläche verweist auf einen unbekannten Befehl oder nicht unterstützt: {command}",
    "INIT_ERROR_TITLE": "Ein Fehler ist aufgetreten während des Starts",
    "INIT_ERROR_UNKNOWN_RESOURCE_TYPE": "<p>Unbekannter oder nicht unterstützter Ressourcentyp für Ressource: <strong>{resourceId}</strong></p>",
    "INIT_ERROR_MISSING_RESOURCE_PARAM": "<p>Kein <strong>resource</strong> Parameter gefunden. Diese Ansicht erfordert diesen Parametersatz in der Abfragezeichenfolge und muss sich auf ein gültiges Weblayout oder eine Anwendungsdefinition beziehen</p>",
    "INIT_ERROR_UNSUPPORTED_COORD_SYS": "<p>Die Karte Definition <strong>{mapDefinition}</strong>, verwendet ein Koordinatensystem, das auf einen gültigen EPSG-Code löst nicht und nicht in diesem Viewer geladen werden kann</p><p>Lösung:</p><ul><li>ändern Sie das System dieser Karte Definition auf eine Koordinate, die</li><li>zu einem EPSG Code löst Bitte beachten Sie: Es wird eine kleine Performance-Overhead für die serverseitige Rückprojektion sein als Ergebnis dies zu tun</li></ul>",
    "INIT_ERROR_UNREGISTERED_EPSG_CODE": "<p>Die Karte Definition <strong>{mapDefinition}</strong>, verwendet ein Koordinatensystem, das auf einen gültigen EPSG-Code löst (<strong>EPSG:{epsg}</strong>), aber keine Projektion für dieses EPSG-Code registriert</p><p>Solution wurde:</p><ol><li>Suche nach dem passenden proj4js Definition unter <a href='http://epsg.io/'>http://epsg.io/</a></li><li>diese Projektion für den Betrachter Registrieren sie vor der Montage</li></ol>",
    "INIT_ERROR_EXPIRED_SESSION": "<p>Die Session-ID angegeben ist abgelaufen: <strong>{sessionId}</strong></p><p>Neu laden den Betrachter ohne die <strong>session</strong> parameter oder liefern eine gültige Session-ID der <strong>session</strong> parameter</p>",
    "INIT_ERROR_RESOURCE_NOT_FOUND": "Versuchte die folgende Ressource zu laden, aber es wurde nicht gefunden: <strong>{resourceId}</strong>",
    "INIT_ERROR_NO_CONNECTION": "<p>Es gibt keine Verbindung zwischen dem MapGuide Web Tier und dem MapGuide Server</p><p>Mögliche Ursachen:</p><ul><li>MapGuide Server läuft nicht oder nicht mehr reagiert</li><li>Internet-Verbindungsprobleme</li></ul><p>Mögliche Lösungen:</p><ul><li>die MapGuide Server-Dienst neu starten</li><li>Wenden Sie sich Server-Administrator</li></ul>",
    "TPL_SIDEBAR_OPEN_TASKPANE": "Öffnen Sie den Task Pane",
    "TPL_SIDEBAR_OPEN_LEGEND": "Öffnen Legend",
    "TPL_SIDEBAR_OPEN_SELECTION_PANEL": "Öffnen Auswahljury",
    "TPL_TITLE_TASKPANE": "Task Pane",
    "TPL_TITLE_LEGEND": "Legend",
    "TPL_TITLE_SELECTION_PANEL": "Auswahljury",
    "TT_GO_HOME": "Nach Hause gehen",
    "TT_GO_BACK": "Geh zurück",
    "TT_GO_FORWARD": "Vorwärts gehen",
    "SESSION_EXPIRED": "Sitzung abgelaufen",
    "SESSION_EXPIRED_DETAILED": "Ihre aktuellen MapGuide Sitzung ist abgelaufen",
    "SESSION_EXPIRED_AVAILABLE_ACTIONS": "Mögliche Aktionen:",
    "SESSION_EXPIRED_RELOAD_VIEWER": "Neu laden den Betrachter",
    "ERR_UNREGISTERED_LAYOUT": "Fehler: Keine Namen Layout ({layout}) registriert",
    "ERR_UNREGISTERED_COMPONENT": "ERROR: No such registrierten Komponente ({componentId}). Sicherstellen, dass die Komponente wurde in der Komponentenregister mit der ID registriert: {componentId}",
    "LOADING_MSG": "Laden ...",
    "MENU_TASKS": "Aufgaben",
    "NO_SELECTED_FEATURES": "Keine ausgewählten Funktionen",
    "FMT_SCALE_DISPLAY": "Scale - 1:{scale}",
    "FMT_SELECTION_COUNT": "Ausgewählte {total} Funktionen in {layerCount} Schichten",
    "DIGITIZE_POINT_PROMPT": "Klicken Sie hier um zu beenden und einen Punkt an diesem Ort ziehen<br/><br/>Drücken Sie ESC abbrechen",
    "DIGITIZE_LINE_PROMPT": "Klicken Sie auf diese Position als Start einzustellen.<br/>Klicken Sie erneut auf die Linie zu beenden an dieser Position<br/><br/>Drücken Sie ESC abbrechen",
    "DIGITIZE_LINESTRING_PROMPT": "Klicken Sie auf diese Position als Start einzustellen.<br/>Klicken Sie erneut auf einen Scheitelpunkt an dieser Stelle hinzuzufügen.<br/>Halten Sie SHIFT und ziehen während der Digitalisierung in Freihandmodus zu zeichnen<br/></br>Double click to finish<br/>Drücken Sie ESC abbrechen",
    "DIGITIZE_CIRCLE_PROMPT": "Klicken Sie auf diese Position als das Zentrum zu setzen.<br/>Bewegen Sie auf den gewünschten Radius aus und klicken Sie erneut zu beenden<br/><br/>Drücken Sie ESC abbrechen",
    "DIGITIZE_RECT_PROMPT": "Klicken Sie auf diese Position als eine Ecke zu setzen.<br/>Klicken Sie erneut zu beenden, und setzen Sie diese Position als die andere Ecke<br/><br/>Drücken Sie ESC abbrechen",
    "DIGITIZE_POLYGON_PROMPT": "Klicken Sie auf diese Position als Start einzustellen.<br/>Klicken Sie erneut auf einen Scheitelpunkt an dieser Stelle hinzuzufügen.<br/>Halten Sie SHIFT und ziehen während der Digitalisierung in Freihandmodus zu zeichnen<br/><br/>Double click to finish and close the polygon<br/>Drücken Sie ESC abbrechen",
    "MEASURING": "Messung",
    "MEASURING_MESSAGE": "Sie messen gerade",
    "MEASUREMENT": "Messung",
    "MEASUREMENT_TYPE": "Messart",
    "MEASUREMENT_TYPE_LENGTH": "Länge (Linestring )",
    "MEASUREMENT_TYPE_AREA": "Fläche (Polygon)",
    "MEASUREMENT_USE_GEODESIC": "Verwenden Sie geodätischen Mess",
    "MEASUREMENT_CLEAR": "Klar",
    "MEASUREMENT_CONTINUE_POLYGON": "Klicken Sie, um weiterhin ein Polygon zeichnen. Doppelklicken Sie auf zu beenden.",
    "MEASUREMENT_CONTINUE_LINE": "Klicken Sie, um auch weiterhin die Linie zu zeichnen. Doppelklicken Sie auf zu beenden.",
    "MEASUREMENT_START_DRAWING": "Klicken Sie auf Zeichnung zu starten",
    "MEASUREMENT_START": "Anfang",
    "MEASUREMENT_END": "Halt",
    "NAVIGATOR_PAN_EAST": "Pan East",
    "NAVIGATOR_PAN_WEST": "Pan Westen",
    "NAVIGATOR_PAN_SOUTH": "Pan Süd",
    "NAVIGATOR_PAN_NORTH": "Pan Nord",
    "NAVIGATOR_ZOOM_OUT": "Rauszoomen",
    "NAVIGATOR_ZOOM_IN": "Hineinzoomen",
    "FMT_NAVIGATOR_ZOOM_TO_SCALE": "Zoom bis 1:{scale}",
    "EXTERNAL_BASE_LAYERS": "Externe Base Layers",
    "SELECTION_PROPERTY": "Eigentum",
    "SELECTION_VALUE": "Wert",
    "SELECTION_PREV_FEATURE": "Zurück Eigenschaft",
    "SELECTION_NEXT_FEATURE": "Nächste Funktion",
    "SELECTION_ZOOMTO_FEATURE": "Zoom auf ausgewählte Funktion"
};