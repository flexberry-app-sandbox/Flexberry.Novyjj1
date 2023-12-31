package Novyjj1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧСметы
 */
@Entity(name = "IISNovyjj1ТЧСметы")
@Table(schema = "public", name = "ТЧСметы")
public class TCHSmety {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "СтСтроиРаб")
    private Float стстроираб;

    @Column(name = "СтМонтРаб")
    private Float стмонтраб;

    @Column(name = "СтОборуд")
    private Float стоборуд;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokSmeta")
    @Convert("DokSmeta")
    @Column(name = "ДокСмета", length = 16, unique = true, nullable = false)
    private UUID _doksmetaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokSmeta", insertable = false, updatable = false)
    private DokSmeta doksmeta;


    public TCHSmety() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Float getСтСтроиРаб() {
      return стстроираб;
    }

    public void setСтСтроиРаб(Float стстроираб) {
      this.стстроираб = стстроираб;
    }

    public Float getСтМонтРаб() {
      return стмонтраб;
    }

    public void setСтМонтРаб(Float стмонтраб) {
      this.стмонтраб = стмонтраб;
    }

    public Float getСтОборуд() {
      return стоборуд;
    }

    public void setСтОборуд(Float стоборуд) {
      this.стоборуд = стоборуд;
    }


}