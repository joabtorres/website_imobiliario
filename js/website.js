/*
 * Carregar categoria de acordo com o tipo do imóvel selecionado
 */
$(document).ready(function () {
    selecionaImovel = function () {
        var valor = $("#cSelecionaImovel").val();
        $("#cCategoria option").addClass('ocultar');
        if (valor == "Casa") {
            $(".ca").removeClass('ocultar');
        } else if (valor == 'Terreno') {
            $(".te").removeClass('ocultar');
        } else if (valor == 'Ponto Comercial') {
            $(".pc").removeClass('ocultar');
        } else if (valor == 'Sala / Loja Comercial') {
            $(".slc").removeClass('ocultar');
        } else if (valor == 'Loteamento') {
            $(".lot").removeClass('ocultar');
        } else if (valor == 'Galpão / Barração') {
            $(".gb").removeClass('ocultar');
        } else if (valor == 'Apartamento') {
            $(".ap").removeClass('ocultar');
        } else if (valor == 'Kitnet') {
            $(".kit").removeClass('ocultar');
        } else if (valor == 'Sítio / Chácara') {
            $(".sch").removeClass('ocultar');
        } else if (valor == 'Lote / Fazenda') {
            $(".lof").removeClass('ocultar');
        } else if (valor == 'Área Portuária') {
            $(".ap").removeClass('ocultar');
        }
    };
    /**
     * 
     * Função para ocultar e descultar campos.
     */
    oculta_e_Desoculta = function () {
        var valor = $("#cSelecionaImovel").val();
        if (valor == 'Casa' || valor == 'Apartamento' || valor == 'Kitnet') {
            $(".o").addClass('ocultar');
            $(".a").removeClass('ocultar');
        } else {
            $(".o").removeClass('ocultar');
            $(".a").addClass('ocultar');
        }
    };
    /**
     * função responsável por ocultar e revelar componentes do FILTRO de busca quando a REFERÊNCIA for modificada
     */
    $("#cReferencia").on("focusout", function () {
        if ($(this).val() == '') {
            $("select option").removeAttr('disabled');
            $("#cBuscar02").removeAttr('disabled');
            $('.aviso-de-busca').addClass('ocultar');
        } else {
            $("select option").attr('disabled', true);
            $("#cBuscar02").attr('disabled', true);
            $('.aviso-de-busca').removeClass('ocultar');
        }
    });
    oculta_e_Desoculta();
    selecionaImovel();
    $("#cSelecionaImovel").on("change", selecionaImovel);
    $("#cSelecionaImovel").on("change", oculta_e_Desoculta);
});