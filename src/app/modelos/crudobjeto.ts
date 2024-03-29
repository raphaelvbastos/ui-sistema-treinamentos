import { ObjetosService } from "../servicos/objetos.service";
import { Router } from "@angular/router";
import { AutenticacaoService } from "../servicos/autenticacao.service";
import { OnInit } from "@angular/core";
import { CursosService } from "../servicos/cursos.service";

export class Crudobjeto implements OnInit {
    objeto: any;
    nomeAPI: string;
    tela: string;
    filtro: string;
    campoFiltro: string;
    campoValido = true;
    cursoCampo: string;

    // constructor(public os: ObjetosService, public router: Router, public as: AutenticacaoService) {
    //     this.os.nomeAPI = this.nomeAPI;
    // }

    constructor(public os: ObjetosService, public router: Router, public as: AutenticacaoService, public cursoService?: CursosService) {
        this.os.nomeAPI = this.nomeAPI;
    }


    ngOnInit() {
        if (this.os.getObjetoSelecionado() != null) {
            this.objeto = this.os.getObjetoSelecionado();
            if (Object.keys(this).indexOf("exibirTagVideo") > -1) {
                if (this.objeto.url.indexOf("https://api-sistema-treinamento.herokuapp") > - 1 || this.objeto.url.indexOf("http://localhost") > - 1) {
                    this["exibirTagVideo"] = true;
                }
            }

            if (Object.keys(this).indexOf("exibirTagEmbebed") > -1) {
                if (this.objeto.url.indexOf("https://api-sistema-treinamento.herokuapp") == - 1 || this.objeto.url.indexOf("http://localhost") == - 1) {
                    this["exibirTagEmbebed"] = true;
                }
            }
        }
    }

    valorDuplicado() {
        this.os.nomeAPI = this.nomeAPI;
        let objetoProcurado: any;
        this.os.filtro = this.filtro;

        this.os.getObjetoFiltro(this.objeto[this.filtro]).subscribe((dados: any) => {
            objetoProcurado = dados;

            if (objetoProcurado != null) {
                this.campoValido = false;
                this.objeto[this.filtro] = "";
            } else {
                this.campoValido = true;
            }
        });
    }

    salvarNoCurso() {
        this.os.nomeAPI = this.nomeAPI;
        if (typeof this.cursoService != "undefined") {
            if (typeof this.cursoCampo != "undefined") {
                let curso = this.cursoService.getObjetoSelecionado();

                if (Object.keys(this.objeto).indexOf("_id") > -1) {
                    let pos = curso[this.cursoCampo].findIndex(x => x._id == this.objeto._id);
                    curso[this.cursoCampo].splice(pos, 1);
                    curso[this.cursoCampo].push(this.objeto);
                    this.objeto = curso;
                } else {
                    curso[this.cursoCampo].push(this.objeto);
                    this.objeto = curso;
                }

                this.os.atualizar(this.objeto).subscribe(
                    (dados) => {
                        this.router.navigate([this.tela]);
                    });
            }

        }
    }

    salvar() {
        // console.log(this.objeto);
        // console.log(this.cursoService.getObjetoSelecionado());
        this.os.nomeAPI = this.nomeAPI;

        // console.log(this.objeto);
        if (Object.keys(this.objeto).indexOf("_id") == -1) {
            if (typeof this.cursoService != "undefined") {
                let curso = this.cursoService.getObjetoSelecionado();
                curso[this.cursoCampo].push(this.objeto);
                this.objeto = curso;

                this.os.atualizar(this.objeto).subscribe(
                    (dados) => {
                        this.router.navigate([this.tela]);
                    });
            } else {
                this.os.incluir(this.objeto).subscribe(
                    (dados) => {
                        this.router.navigate([this.tela]);
                    });
            }



            // this.os.incluir(this.objeto).subscribe(
            //     (dados) => {
            //         this.router.navigate([this.tela]);
            //     });
        } else {
            if (typeof this.cursoService != "undefined") {

                let curso = this.cursoService.getObjetoSelecionado();
                let pos = curso[this.cursoCampo].findIndex(x => x._id == this.objeto._id);
                curso[this.cursoCampo].splice(pos, 1);

                curso[this.cursoCampo].push(this.objeto);
                this.objeto = curso;

                this.os.atualizar(this.objeto).subscribe(
                    (dados) => {
                        this.router.navigate([this.tela]);
                    });

            } else {
                this.os.atualizar(this.objeto).subscribe(
                    (dados) => {
                        this.router.navigate([this.tela]);
                    });
            }

            // this.os.atualizar(this.objeto).subscribe(
            //     (dados) => {
            //         this.router.navigate([this.tela]);
            //     });
        }

        // if (Object.keys(this.objeto).indexOf("_id") == -1) {
        //     this.os.incluir(this.objeto).subscribe(
        //         (dados) => {
        //             this.router.navigate([this.tela]);
        //         });
        // } else {
        //     this.os.atualizar(this.objeto).subscribe(
        //         (dados) => {
        //             this.router.navigate([this.tela]);
        //         });
        // }
    }

    compareById(f1: any, f2: any): boolean {
        return f1 && f2 && f1._id === f2._id;
    }

    ehAdministrador() {
        if (this.as.getUsuario() != null) {
            if (this.as.getUsuario().tipo.tipo == "Administrador") {
                return true;
            }
            return false;
        } else {
            return false;
        }
    }
}