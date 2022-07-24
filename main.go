package main

//using os library for getting port from env
import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	httpPort := os.Getenv("HTTP_PORT")
	if httpPort == "" {
		httpPort = ":8080"
	}
	http.Handle("/", http.FileServer(http.Dir("./files")))
	fmt.Println("Server Running at:" + httpPort)
	log.Fatal(http.ListenAndServe(httpPort, nil))

}
