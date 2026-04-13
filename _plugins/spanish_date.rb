module Jekyll
  module SpanishDateFilter
    MONTHS = {
      "January"   => "enero",
      "February"  => "febrero",
      "March"     => "marzo",
      "April"     => "abril",
      "May"       => "mayo",
      "June"      => "junio",
      "July"      => "julio",
      "August"    => "agosto",
      "September" => "septiembre",
      "October"   => "octubre",
      "November"  => "noviembre",
      "December"  => "diciembre"
    }

    def spanish_date(date)
      return "" unless date
      d = date.is_a?(String) ? Time.parse(date) : date
      day = d.strftime("%-d")
      month = MONTHS[d.strftime("%B")] || d.strftime("%B")
      year = d.strftime("%Y")
      "#{day} de #{month} de #{year}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::SpanishDateFilter)
