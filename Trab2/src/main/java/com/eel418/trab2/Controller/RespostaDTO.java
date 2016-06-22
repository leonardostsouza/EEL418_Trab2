/*
 * Este codigo faz parte do primeiro trabalho desenvolvido para o curso
 * EEL 418 - Programacao Avanacada, ministrado no primeiro semestre
 * de 2016 pelo professor Jorge Lopes de Souza Leao
 * Autor: Leonardo dos Santos Teixeira de Souza
 * DRE: 112086681
 */
package com.eel418.trab2.Controller;

import java.io.Serializable;
import javax.json.Json;
import javax.json.JsonObject;

/**
 *
 * @author Leonardo
 */
public class RespostaDTO implements Serializable {
    private String patrimonio;
    private String titulo;
    private String autoria;
    private String veiculo;
    private String dataPublicacao;  
    private JsonObject JSONobj;
    
    public JsonObject toJSON(){

        JSONobj = Json.createObjectBuilder()
                .add("titulo", titulo)
                .add("autoria", autoria)
                .add("veiculo", veiculo)
                .add("dataPublicacao", dataPublicacao)
                .build();
        
        return JSONobj;
    }
    
    @Override
    public String toString(){
        return toJSON().toString();
    }

    public String getPatrimonio() {
        return patrimonio;
    }

    public void setPatrimonio(String patrimonio) {
        this.patrimonio = patrimonio;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutoria() {
        return autoria;
    }

    public void setAutoria(String autoria) {
        this.autoria = autoria;
    }

    public String getVeiculo() {
        return veiculo;
    }

    public void setVeiculo(String veiculo) {
        this.veiculo = veiculo;
    }

    public String getDataPublicacao() {
        return dataPublicacao;
    }

    public void setDataPublicacao(String dataPublicacao) {
        this.dataPublicacao = dataPublicacao;
    }
}
