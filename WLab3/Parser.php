<?php


class Parser
{

    private const PATH_TO_XML_FILE = "/var/www/lab3-texteditor/xmls/texts.xml";
    private const PATH_TO_TEMPLATE = "/var/www/lab3-texteditor/tmpl/texts.php";

    public function getAllNotes()
    {
        $notes = [];
        foreach ($this->load() as $item) {
            $item["value"] = htmlspecialchars_decode($item["value"]);
            $notes[] = $item;
        }
        return $notes;
    }

    private function load()
    {
        $res = [];
        foreach (((array) simplexml_load_file(Parser::PATH_TO_XML_FILE))["text"] as $item) {
            if (empty((array)$item)) {
                continue;
            }
            $res[] = (array)$item;
            $res[count($res) - 1]["value"] = htmlspecialchars($res[count($res) - 1]["value"]);
        }
        return $res;
    }

    public function save($text)
    {
        $id = ((array) simplexml_load_file(Parser::PATH_TO_XML_FILE))["maxid"][0] + 1;
        return file_put_contents(Parser::PATH_TO_XML_FILE, $this->prepare([
            "data" => array_merge([["id" => $id, "value" => htmlspecialchars($text)]], $this->load()),
            "id" => $id
        ]));
    }

    public function remove($id)
    {
        $res = [];
        foreach ($this->load() as $text) {
            if ($text["id"] != $id) {
                $res[] = $text;
            }
        }
        return file_put_contents(Parser::PATH_TO_XML_FILE, $this->prepare([
            "data" => $res,
            "id" => $id = ((array) simplexml_load_file(Parser::PATH_TO_XML_FILE))["maxid"][0]
        ]));
    }

    private function prepare(array $data)
    {
        ob_start();
        include Parser::PATH_TO_TEMPLATE;
        return ob_get_clean();
    }

}
