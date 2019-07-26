import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './paginas/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDialog, MatDialogModule } from '@angular/material';
import { PainelComponent } from './paginas/painel/painel.component';
import { TabelaComponent } from './paginas/tabela/tabela.component';
import { PaginaCursosComponent } from './paginas/pagina-cursos/pagina-cursos.component';
import { PaginaCursoComponent } from './paginas/pagina-curso/pagina-curso.component';
import { RotasModule } from './rotas/rotas.module';
import { LoginComponent } from './paginas/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { UsuarioComponent } from './paginas/usuario/usuario.component';
import { ConfirmacaoComponent } from './paginas/confirmacao/confirmacao.component';
import { ErroComponent } from './paginas/erro/erro.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CursoscategoriasComponent } from './paginas/cursoscategorias/cursoscategorias.component';
import { CursoscategoriaComponent } from './paginas/cursoscategoria/cursoscategoria.component';
import { CursosComponent } from './paginas/cursos/cursos.component';
import { CursoComponent } from './paginas/curso/curso.component';
import { UnidadesComponent } from './paginas/unidades/unidades.component';
import { UnidadeComponent } from './paginas/unidade/unidade.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PainelComponent,
    TabelaComponent,
    PaginaCursosComponent,
    PaginaCursoComponent,
    LoginComponent,
    UsuariosComponent,
    UsuarioComponent,
    ConfirmacaoComponent,
    ErroComponent,
    CursoscategoriasComponent,
    CursoscategoriaComponent,
    CursosComponent,
    CursoComponent,
    UnidadesComponent,
    UnidadeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RotasModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    ConfirmacaoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
